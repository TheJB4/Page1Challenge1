import React from 'react'
import '../styles/FooterContainer.css'
import Logo1 from '../public/client-databiz.svg'
import Logo2 from '../public/client-audiophile.svg'
import Logo3 from '../public/client-meet.svg'
import Logo4 from '../public/client-maker.svg'

const Footer = () => {
  return (
    <div className='footer-container'>
        <img src={Logo1} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
    </div>
  )
}

export default Footer