import React, { Component } from 'react'
// import video from './videos/HeroVideo.mp4'
import './styles/Home.css'

const Home = () => {
    return (
      
    //      <video autoPlay muted loop id="myVideo1">
    //         <source src='/Users/markdelgado/Projects/andys-fence/public/HeroVideo.mp4' type='video/mp4' />
    // </video>
        <div className='myVideo'>
            <video autoPlay muted loop id="HeroVideo" src='./videos/HeroVideo.mp4' >
                <source  type='video/mp4' />
            </video>

        </div>
    )
}

 export default Home