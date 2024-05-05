import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
 
     const [user , setUser] = useState([])
     const [loading , setLoading] = useState(true)
     const provider = new GoogleAuthProvider();

     const createUser = ( email , password) => {
        setLoading(true)
        return createUserWithEmailAndPassword ( auth , email , password ) 
     }

     const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }

     useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currUser) => {
             setUser(currUser)
             setLoading(false)
        })
        return () => unsubcribe
     },[])
        
     const signWithGoogle = ( ) => {
               return signInWithPopup(auth, provider) 
               
     }

     const logOut = () => {
       setLoading(true)
       return signOut(auth)
     }

    const obj = {
   user ,
   setUser,
   loading,
   setLoading,
   createUser,
   signIn,
   logOut,
   signWithGoogle,
   auth
  
    }

  return (
      <AuthContext.Provider value={obj}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider