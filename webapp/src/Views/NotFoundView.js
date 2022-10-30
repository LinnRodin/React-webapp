import React from 'react'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'

const NotFoundView = () => {
  window.top.document.title = 'NotFound | Fixxo.'

  return (
    
    <>
    <TopMenuSection />
    <h1>404 - Page Not Found</h1>
    <FooterSection />
    </>  
    
   
    
  )
}

export default NotFoundView