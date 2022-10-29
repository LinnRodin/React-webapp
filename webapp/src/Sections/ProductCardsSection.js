import React, { useState } from 'react'
import ProductCard from '../Components/ProductCard'

const ProductCardsSection = ({title}) => {
    
    const [products, setProducts] = useState([
        {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7165175/pexels-photo-7165175.jpeg?auto=compress&cs=tinysrgb&w=600"},
        {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4969872/pexels-photo-4969872.jpeg?auto=compress&cs=tinysrgb&w=600"},
    ])

    return (
        <section className="new-arrivals">
            <div className="container">
                <div className="header">
                    <h1>{title}</h1>
                </div>
                <div className="grid">
                 {
                    products.map(product => <ProductCard key={product.id} item={product} />)
                 } 
                </div>
            </div>                   
        </section>
    
    )   


}

export default ProductCardsSection
