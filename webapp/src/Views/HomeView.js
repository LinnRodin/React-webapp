import React from 'react'
import TopMenuSection from '../Sections/TopMenuSection'
import ShowCaseSection from '../Sections/ShowCaseSection'
import ProductCardsSection from '../Sections/ProductCardsSection'
import ShowCase2Section from '../Sections/ShowCase2Section'
import FooterSection from '../Sections/FooterSection'


const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  return (
    <>
      <TopMenuSection />
      <ShowCaseSection />
      <ProductCardsSection title="Featured Products" />
      <ShowCase2Section />
      <FooterSection />
    </>  
  
  )
}

export default HomeView
