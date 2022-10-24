import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../Components/MenuIcon'

const TopMenuSection = () => {
    return (
  
      <section>
          <div className="top-menu">
              <div className="container">
                  <div className="brand-logo">
                      Fixxo.
                  </div>
                  <div className="menu-links">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/categories">Categories</NavLink>
                      <NavLink to="/products">Products</NavLink>
                      <NavLink to="/contacts">Contacts</NavLink>
                  </div>
                  <div>
                      <span className="social-media">
                          <MenuIcon link="/search" icon="fa-sharp fa-solid fa-magnifying-glass"/>
                          <MenuIcon link="/compare" icon="fa-solid fa-code-compare fa-flip-horizontal"/>
                          <MenuIcon link="/wishlist" icon="fa-regular fa-heart"/>
                          <MenuIcon link="/shoppingcart" icon="fa-solid fa-bag-shopping"/>
                      </span>    
                  </div>
              </div>
          </div>
      </section> 
    )
  }
  
  export default TopMenuSection
