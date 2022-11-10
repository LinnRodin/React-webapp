import React from 'react'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'


const CategoriesView = () => {
  window.top.document.title = 'Categories | Fixxo.'
  return (
    <>
     <TopMenuSection />
     <FooterSection />
    </>  
  )
}

export default CategoriesView