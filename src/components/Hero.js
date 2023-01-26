import './styles/Hero.css'

const Hero = () => {
    return(
        <div className='myVideo'>
            <video autoPlay muted loop id="HeroVideo" src='./videos/HeroVideo.mp4' >
                <source type='video/mp4' />
            </video>
        </div>
    )
}

export default Hero