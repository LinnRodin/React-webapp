import React from 'react'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'

const ProductsView = () => {
  window.top.document.title = 'Products | Fixxo.'
  return (
    <>
    <TopMenuSection />
    <FooterSection />
    </>  
  )
}

export default ProductsView
