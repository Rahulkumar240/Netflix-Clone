import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate(); 

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt='' className='caption-img' />
          <p>Oppenheimer is about a scientist who leads the creation of the atomic bomb.
It focuses on the consequences of that invention and the moral conflict behind it.</p>
          <div className="hero-btns">
            <button onClick={()=>window.open('https://youtu.be/uRJQJcy3f8w?si=RC4_sPJ0NTQfw2pM', '_blank')}
             className='btn'><img src={play_icon} alt='' />Play</button>
             <button onClick={()=>navigate('/player/872585')}
            className='btn dark-btn'><img src={info_icon} alt='' />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Trending Now"} category={"popular"} />
        <TitleCards title={"New Releases"} category={"upcoming"} />
        <TitleCards title={"Popular TV Shows"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home