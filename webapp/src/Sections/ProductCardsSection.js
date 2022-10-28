import React, { useState } from 'react'
import ProductCard from '../Components/ProductCard'

const ProductCardsSection = ({title}) => {
    
    const [products, setProducts] = useState([
        {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "Assets/alpine1.jpg"},
        {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "alpine1.jpg" },
        {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "alpine1.jpg" },
        {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "alpine1.jpg" },
    ])

    return (
        <section className="new-arrivals">
            <div className="container">
                <div className="header">
                    <h1>{title}</h1>
                </div>
                <div className="grid">
                 {
                    products.map(product => <ProductCard item={product} />)
                 } 
                </div>
            </div>                   
        </section>
    
    )   


}

export default ProductCardsSection
