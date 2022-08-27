import React,{useEffect} from 'react'
import ImageMobile from '../../public/image-hero-mobile.png'
import ImageDesktop from '../../public/image-hero-desktop.png'
import '../../styles/Home.css'
import Footer from '../Footer'
const Home = () => {
  window.addEventListener("resize",(e)=>{
    e.target.innerWidth < 600 ? window.location.reload() : null
  })
  return (
    <div>
      <main className='home-container'>
        <div className='img-container'>
          <img src={window.innerWidth >600 ? ImageDesktop : ImageMobile} alt="" className='img-home'/>
        </div>
        <div className='info-container'>
          <h1>Make remote work</h1>

          <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

          <button>Learn more</button>

          <Footer/>
        </div>
      </main>
    </div>
  )
}

export default Home