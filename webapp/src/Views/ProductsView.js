import React from 'react'
import TopMenuSection from '../Sections/TopMenuSection'
import BreadCrumbSection from '../Sections/BreadCrumbSection'
import ProductCardsSection from '../Sections/ProductCardsSection'
import FooterSection from '../Sections/FooterSection'

const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'
  return (
    <>
      <TopMenuSection />
      <BreadCrumbSection currentPage="Products"/>
      <ProductCardsSection title="Products" />
      <FooterSection />
    </>  
  )
}

export default ProductsView
