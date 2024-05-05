const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

app.use(cors());
app.use(express.json());

var jwt = require('jsonwebtoken');

const uri = `${process.env.DB_USER}`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Changed function name and fixed typo in parameter list
const verifyJWT = (req, res, next) => {
  console.log("Hitting verify jwt");
  const authorization = req.headers.authorization;
  
  if (!authorization) {
    console.log("No authorization");
    return res.status(401).json({ error: true, message: 'Access denied. No token provided.' });
  }
  
  const token = authorization.split(' ')[1]; // removing Bearer

  // Fixed error handling and callback function parameters
  jwt.verify(token, process.env.ACCESS_TOKEN, (error, decoded) => {
    if (error) {
      console.error("JWT Verification Error:", error);
      return res.status(401).json({ error: true, message: 'Access denied. Invalid token.' });
    }
    req.decoded = decoded;
    next();
  });
};

async function run() {
  try {
   
    const serviceCollection = client.db('cars-doctor').collection('services');
    // Corrected spelling of collection name
    const bookingCollection = client.db('cars-doctor').collection('bookings');

    app.post('/jwt', (req, res) => {
      const user = req.body;
      console.log(user);

      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: '1h'
      });
      console.log(token);
      res.send({ token });
    });

    app.get('/services', async (req, res) => {
      const cursor = serviceCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get('/services/:id', async (req, res) => {
      const id = req.params.id;
      const result = await serviceCollection.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    app.post('/bookings', async (req, res) => {
      const newBooking = req.body;
      console.log(newBooking);
      const result = await bookingCollection.insertOne(newBooking);
      res.send(result);
    });

    app.get('/bookings', verifyJWT, async (req, res) => {
      const decoded = req.decoded;
      let query = {};
      if (req.query?.email) {
        query = { email: req.query.email };
      }
      const result = await bookingCollection.find(query).toArray();
      res.send(result);
    });

    app.delete('/bookings/:id', async (req, res) => {
      const id = req.params.id;
      const result = await bookingCollection.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });

    app.patch('/bookings/:id', async (req, res) => {
      const id = req.params.id;
      const updatedBooking = req.body;
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          status: updatedBooking.status
        }
      };
      const result = await bookingCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}



run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Server is Running');
});

// Added error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({ error: true, message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
