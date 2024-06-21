import React from 'react'
import bannerImage from '../assests/images/banner.jpg';

const Banner = () => {
  return (
    <div 
    className='container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column' 
    style={{
      height: "50vh",
      backgroundImage: `url(${bannerImage})`,
  
      }}>

      <h1 style={{fontSize: "50px", color:"Blue"}}>NEWS Portal</h1>
      <h5 style={{color: "black", fontSize: "20px"}}>THE WEBSITE BUILD WITH NEWS API</h5>
    </div> 
  )
}

export default Banner
