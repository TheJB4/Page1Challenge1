import React,{useState} from 'react'
import closeButton from '../public/icon-close-menu.svg'
import ContainerLink from './ContainerLink'

import NavMenu from './NavMenu'

import '../styles/HamburguerMenu.css'

const HamburgerMenu = ({disabledButton}) => {
  let [isActive,setIsActive] = useState(false)
  return (
    <div>
        <div className='close-btn' onClick={(e)=>disabledButton()}>
            <img src={closeButton} alt="" />
        </div>
        <div className='container-div-links'>
          <ContainerLink title={"Features"} links={["Todo List","Calendar","Reminders","Planning"]}/>
          <ContainerLink title={"Company"} links={["History","Our Team","Blog"]}/>
          <ContainerLink title={"Careers"} />
          <ContainerLink title={"About"} />
        </div>
        <div className='login-container-menu'>
            <button>Login</button>
            <button>Register</button>
          </div>
    </div>
  )
}

export default HamburgerMenu