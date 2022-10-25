import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon}) => {
    return (
  
      <button className="btn btn-light btn-circle btn-sm">
      <NavLink className="menu-icon" to={link} end><i className={icon}></i></NavLink>
      </button>
    )
  }

export default MenuIcon