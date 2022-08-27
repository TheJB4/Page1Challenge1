import React,{useState} from 'react'
import BtnArrowDown from '../public/icon-arrow-down.svg'
import BtnArrowUp from '../public/icon-arrow-up.svg'
import NavMenu from './NavMenu'

import TodoListIcon from '../public/icon-todo.svg'
import RemindersIcon from '../public/icon-reminders.svg'
import PlanningIcon from '../public/icon-planning.svg'
import CalendarIcon from '../public/icon-calendar.svg'

import '../styles/ContainerLinks.css'

const ContainerLink = ({title,links}) => {
  let [btnNavEnabled,setBtnNavEnabled] = useState(false)
  return (
    <div className='container-link'>
          <div className='name-content-link'>
            {
              btnNavEnabled ?
              (
                <div className='link-btn' onClick={(e)=>setBtnNavEnabled(false)}>
                  <p>{title}</p>
                </div>
              ) : (
                <div className='link-btn' onClick={(e)=>setBtnNavEnabled(true)}>
                  <p>{title}</p>
                </div>
              )
            }
           {links && (
                btnNavEnabled ?
                 (
                   <div className='link-btn' onClick={(e)=>setBtnNavEnabled(false)}>
                     <img src={BtnArrowUp} alt="" style={{margin:"0"}}/>
                   </div>
                 ) : (
                   <div className='link-btn' onClick={(e)=>setBtnNavEnabled(true)}>
                     <img src={BtnArrowDown} alt="" style={{margin:"0"}}/>
                   </div>
                 )
           )}
          </div>
          <div className={btnNavEnabled ? 'handle-btn-open' : 'handle-btn-close'}>
            <NavMenu className='main-menu'>
              <div className='container-links'>
                <ul>
                {links && links.map(e => {
                return (
                    <li className=''>
                      {
                        (e === "Todo List" ? <img src={TodoListIcon}/> : null)
                      }
                      {
                        (e === "Calendar" ? <img src={CalendarIcon}/> : null)
                      }
                      {
                        (e === "Reminders" ? <img src={RemindersIcon}/> : null)
                      }
                      {
                        (e === "Planning" ? <img src={PlanningIcon}/> : null)
                      }
                      <a href="#">{e}</a>
                    </li>
                )
              })}
                </ul>
              </div>
            </NavMenu>
          </div>
        </div>
  )
}

export default ContainerLink