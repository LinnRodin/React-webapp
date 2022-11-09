import React from 'react'
import NotFoundView from '../Views/NotFoundView'


const CategoriesView = () => {
  window.top.document.title = 'Categories | Fixxo.'
  return (
    <>
    <NotFoundView />
    </>  
  )
}

export default CategoriesView