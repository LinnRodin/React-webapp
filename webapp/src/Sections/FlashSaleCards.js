import React from 'react'
import ProductCard from '../Components/ProductCard'


const FlashSaleCards = ({ products = []}) => {
  return (
        <section className="flash-sale-left">
                <div className="container">
                    <div className="grid">                 
                        <div className="img_left_box">
                            <h1>2 FOR USD $29</h1>
                        </div>   
                        <div className="img_left_button">
                            <a href = "#"><button type= "button" className="btn special_button">FLASH SALE</button></a>
                        </div>
                        {
                          products.map( product => <ProductCard key={product.articleNumber} product={product} />)
                        } 
                    </div>
                </div>  
        </section>      
    )
}

export default FlashSaleCards