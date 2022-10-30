import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadCrumbSection = ({currentPage}) => {
  return (

        <section class="breadcrumb">
            <div class="container">
                <ul class="breadcrumb-list">
                    <li>
                        <NavLink to="/" className="me-1">Home</NavLink>
                    </li> 
                    <li>{currentPage}</li>
                </ul>
            </div>
        </section>

  )
}

export default BreadCrumbSection

