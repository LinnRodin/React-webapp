import React, { useContext } from 'react'
import TopMenuSection from '../Sections/TopMenuSection'
import ShowCaseSection from '../Sections/ShowCaseSection'
import ProductCardsSection from '../Sections/ProductCardsSection'
import ShowCase2Section from '../Sections/ShowCase2Section'
import FooterSection from '../Sections/FooterSection'
import {ProductContext} from '../Contexts/contexts'

const HomeView = () => {
  window.top.document.title = 'Fixxo.'
  
  const productContext = useContext(ProductContext)

  return (
    <>
      <TopMenuSection />
      <ShowCaseSection />
      <ProductCardsSection title="Featured Products" products={productContext.featuredProducts} />
      <ShowCase2Section />
      <FooterSection />
    </>  
  
  )
}

export default HomeView
