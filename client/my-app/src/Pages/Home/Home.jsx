import React from 'react'
import Banner from './Banner'
import About from './About'
import Services from './services/Services'
import Parts from './Parts/Parts'
import Teams from './Team/Teams'
import Why from './Why Choose Us/Why'

const Home = () => {
  return (

    <div>
      <Banner />
      <About/>
      <Services />
      <Parts />
      <Teams/>
      <Why/>
    </div>

  )
}

export default Home