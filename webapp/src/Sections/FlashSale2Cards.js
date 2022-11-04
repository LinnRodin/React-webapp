import React from 'react'
import ProductCard from '../Components/ProductCard'

const FlashSale2Cards = ({ products = []}) => {
  return (
      
    <section className="flash-sale-right">
        <div className="container">
            <div className="grid"> 
                <div className="img_right_box">
                        <h1>2 FOR USD $49</h1>
                    <div className="img_right_button">
                        <a href = "#"><button type= "button" className="btn special_button">FLASH SALE</button></a>
                    </div>
                    {
                       products.map( product => <ProductCard key={product.articleNumber} product={product} />)
                    } 
                </div>
            </div>
        </div>        
    </section>
  )
}

export default FlashSale2Cards