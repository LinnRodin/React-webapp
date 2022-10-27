import React from 'react'
import { NavLink } from 'react-router-dom'
import TempImg from '../Assets/Images/alpine1.jpg'

const ProductCard = () => {
  return (
      <section className="new-arrivals">
              <div className="container">
                    <div className="grid">
                          {/* 1 */}
                          <div className="card">
                              <div className="img"></div> 
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
                                      <p className="category">Category</p>
                                      <h1><strong>Modern Black Blouse</strong></h1>
                                      <div className="text-theme">
                                      <i className="fa-solid fa-star"></i>
                                      <i className="fa-solid fa-star"></i>
                                      <i className="fa-solid fa-star"></i>
                                      <i className="fa-solid fa-star"></i>
                                      <i className="fa-solid fa-star"></i>
                                      </div>
                                  </div>
                                  <div className="card-price">
                                    <p className="card-discount-price">€30.00</p>
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