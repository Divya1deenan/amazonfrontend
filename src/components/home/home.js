import React from 'react'
import Dashboard from '../Dashboard/Dashboard'

import "./Home.css"

import Header from '../Header/Header'
import Slider from '../Slider/Slider'
import Footer from '../Footer/Footer'
import Mobile from '../mobile/mobile'

const Home = () => {

  
  const slides = [

    
    { url: "http://localhost:3000/dashboard-1.JPG", title: "url1" },
    { url: "http://localhost:3000/dashboard-2.JPG", title: "url1" },
    { url: "http://localhost:3000/dashboard-3.JPG", title: "url2" },
    { url: "http://localhost:3000/dashboard-1.JPG", title: "url3" },

  ]


  return (
    <>
      <Header />
      <Dashboard />
      <div className='main-slider'>
        <Slider slides={slides} />
      </div>
      <Mobile/>
      {/* <Footer/> */}
    </>

  )
}

export default Home