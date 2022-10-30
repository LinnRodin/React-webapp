
import React, { useState } from 'react'
import ProductCardsSection from '../Sections/ProductCardsSection'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'

const HomeView = () => {

  const [featuredProducts, setFeaturedProducts] = useState([
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7165175/pexels-photo-7165175.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4969872/pexels-photo-4969872.jpeg?auto=compress&cs=tinysrgb&w=600"},
])

const [topProducts, setTopProducts] = useState([
  {id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7165175/pexels-photo-7165175.jpeg?auto=compress&cs=tinysrgb&w=600"},
  {id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4969872/pexels-photo-4969872.jpeg?auto=compress&cs=tinysrgb&w=600"},
])

  return (

    <>
    <TopMenuSection />
    <ProductCardsSection title="Featured Products" products={featuredProducts} />
    <ProductCardsSection title="Top Products" products={topProducts} />
    <FooterSection />
    </>  
  
  )
}

export default HomeView
