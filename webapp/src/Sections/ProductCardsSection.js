import React from 'react'
import ProductCard from '../Components/ProductCard'

const ProductCardsSection = () => {
    return (
        <section className="new-arrivals">
            <div className="container">
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