import React from 'react'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'
import ProductCardsSection from '../Sections/ProductCardsSection'

const HomeView = () => {
  return (

    <>
    <TopMenuSection />
    <ProductCardsSection title="Featured Products"/>
    <FooterSection />
    </>  
  
  )
}

export default HomeView
