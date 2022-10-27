import React from 'react'
import ProductCard from '../Components/ProductCard'

const ProductCardsSection = ({title}) => {
    return (
        <section className="new-arrivals">
            <div className="container">
                <div className="header">
                    <h1>{title}</h1>
                </div>
                <div className="grid">
                  <ProductCard />
                  <ProductCard />   
                  <ProductCard />   
                  <ProductCard />   
                  <ProductCard />   
                  <ProductCard />   
                  <ProductCard />   
                  <ProductCard />   
                </div>
            </div>                   
        </section>
    
    )   


}



export default ProductCardsSection