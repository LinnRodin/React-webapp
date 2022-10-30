import React from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../Sections/FooterSection'
import TopMenuSection from '../Sections/TopMenuSection'

const ProductDetailsView = () => {

const params = useParams()

  return (
    
    <>
        <TopMenuSection />
        <div className='container mt-5'>
            <h1>{params.id}</h1>
        </div>
        <FooterSection />
    </>  

  )
}

export default ProductDetailsView