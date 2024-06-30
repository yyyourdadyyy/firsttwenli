
import React from 'react'
import{NavLink} from "react-router-dom"


export const Header = () => {


const activeStyle = {
  color: '#FFF'
};

  return (
   <div className="header">
     <header>
        <div className="logo">
        </div>
        <ul className="menu">
                <li className='mr-1'><NavLink 
                to={'/'}
                style={({isActive})=> isActive ? activeStyle : undefined}
                >Главная</NavLink></li>
                <li className='mr-1'><NavLink 
                to={'/catalog'}
                style={({isActive})=> isActive ? activeStyle : undefined}
                >Каталог</NavLink></li>
                <li className='mr-1'><NavLink 
                to={'/about'}
                style={({isActive})=> isActive ? activeStyle : undefined}
                >О нас</NavLink></li>
        </ul>
        <a class="buy header-buy" href="/Order">Заказать</a>

  </header>
   </div>
  )
}
