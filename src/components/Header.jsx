import React,{useState} from 'react'
import logo from '../public/logo.svg'
import IconMenu from '../public/icon-menu.svg'
import HamburgerMenu from './HamburgerMenu'
import '../styles/Header.css'
import '../styles/HamburguerMenu.css'

const Header = () => {
  let [isActive,setIsActive] = useState(false)
  
  let enableButton = () => {
    setIsActive(true)
  }

  let disabledButton = () => {
    setIsActive(false)
  }

  return (
    <div className=''>
        <header className='main-header'>
            <div className='header-logo'>
              <img src={logo} alt="" />
            </div>
            <div className='header-logo-btn' onClick={(e)=>enableButton()}>
                <img src={IconMenu} alt="" />
            </div>

            <div className={isActive ? 'hamburguer-menu-container-enabled' : 'hamburguer-menu-container-disabled'}>
              <div className='menu-container-body-black'>
              </div>
              <div className='menu-container-body'>
                <HamburgerMenu disabledButton={disabledButton}/>
              </div>
            </div>
        </header>
    </div>
  )
}

export default Header