import React from 'react'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'
import NotFoundImage from '../Assets/Images/404-Website-Page-Template.jpg'



const CategoriesView = () => {
  window.top.document.title = 'Categories | Fixxo.'
  return (
    <>
    <TopMenuSection />
      <div className="container">
          <div className="d-flex justify-content-center align-items-center vh-100">
            <img src={NotFoundImage} alt="404 Page Not Found" style={{ height: "768px" }} />
          </div>
        </div>
      <FooterSection />
    </>  
  )
}

export default CategoriesView