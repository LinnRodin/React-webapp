import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuIcon = ({link, icon}) => {
    return (
  
      <button type="button" className="btn btn-light btn-circle btn-sm">
      <NavLink className="menu-icon" to={link}><i className={icon}></i></NavLink></button>
    )
  }

export default MenuIcon