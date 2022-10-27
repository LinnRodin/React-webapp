import React from 'react'
import { NavLink } from 'react-router-dom'
import TempImg from '../Assets/Images/alpine1.jpg'

const ProductCard = () => {
  return (
      <section className="new-arrivals">
            <div className="container">
                <div className="grid">
                    <div className="card">
                          <img src={TempImg} alt="" />
                            <ul className="card-menu">
                                <li><button type="button" className="btn btn-light btn-circle btn-sm"><a href = "#"><i className="fa-regular fa-heart"></i></a></button></li> 
                                <li><button type="button" className="btn btn-light btn-circle btn-sm"><a href = "#"><i className="fa-solid fa-code-compare fa-flip-horizontal"></i></a></button></li> 
                                <li><button type="button" className="btn btn-light btn-circle btn-sm"><a href = "#"><i className="fa-solid fa-bag-shopping"></i></a></button></li> 
                            </ul>
                            <div className="card-general">
                                <NavLink to="/products/"id>
                                  <button type= "button" className="btn special_button">
                                    QUICK VIEW</button>
                                </NavLink>
                                <div className="card-info">
                                    <p className="card-category">Category</p>
                                    <h6 className="card-title">Modern Black Blouse</h6>
                                    <div className="card-rating">
                                      <i className="fa-solid fa-star"></i>
                                      <i className="fa-solid fa-star"></i>
                                      <i className="fa-solid fa-star"></i>
                                      <i className="fa-solid fa-star"></i>
                                      <i className="fa-solid fa-star"></i>
                                    </div>
                                  <p className="card-new-price">$30.00</p>
                                </div>
                          </div> 
                    </div>
                     <div className="card-background"></div>
                </div>      
            </div>  
      </section>

  )       
}

export default ProductCard