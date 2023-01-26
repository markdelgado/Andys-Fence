import React, { Component } from 'react'
// import video from './videos/HeroVideo.mp4'
import './styles/Home.css'
import Promotion from './Promotion'
import Hero from './Hero'

const Home = () => {
    return (
      
   
    <div id='Home-container'>

        {/* <div className='myVideo'>
            <video autoPlay muted loop id="HeroVideo" src='./videos/HeroVideo.mp4' >
                <source  type='video/mp4' />
            </video>
        </div> */}
        <Hero/>
        <Promotion/>
        

    </div>
    )
}

 export default Home