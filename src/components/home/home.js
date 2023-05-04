import React from 'react'
import Dashboard from '../Dashboard/Dashboard'

import "./Home.css"

import Header from '../Header/Header'
import Slider from '../Slider/Slider'
// import Footer from '../Footer/Footer'
import Books from '../Books/Books'
import Electronics from '../Electronics/Electronics'
import HomeandFur from '../HomeandFur/HomeandFur'
import Mobile from '../mobile/mobile'
import Watch from '../Watch/Watch'
import Tvpro from '../Tv/Tv'






const Home = () => {

  
  const slides = [
    { url: "http://localhost:3000/dashboard-1.jpg", title: "url1" },
    { url: "http://localhost:3000/dashboard-2.jpg", title: "url1" },
    { url: "http://localhost:3000/dashboard-3.jpg", title: "url1" },
    

  ]


  return (
    <>
      <Header />
      <Dashboard />
      <div  style={{backgroundColor:"rgb(204, 204, 255)"}} className='main-slider'>
        <Slider slides={slides} />
      </div>
      <br></br>
      <div style={{backgroundColor:"rgb(204, 204, 255)",padding:"20px",display:"flex",justifyContent:"space-evenly",margin:"20px"}}> 
      <Books/>
      <Electronics/>
      <HomeandFur/>
      </div>
     
      <Mobile/>  
     <Watch/>
     <Tvpro/>
      
      {/* <Footer/> */}
    </>

  ) 
}

export default Home