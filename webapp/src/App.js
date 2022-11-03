import React, { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './Views/HomeView';
import CategoriesView from './Views/CategoriesView';
import ProductsView from './Views/ProductsView';
import ProductDetailsView from './Views/ProductDetailsView';
import ContactsView from './Views/ContactsView';
import SearchView from './Views/SearchView';
import CompareView from './Views/CompareView';
import WishListView from './Views/WishListView';
import ShoppingCartView from './Views/ShoppingCartView';
import NotFoundView from './Views/NotFoundView';
import {ProductContext} from './Contexts/contexts';

function App() {

  const [products, setProducts] = useState([
    {id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/2433353/pexels-photo-2433353.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/7165175/pexels-photo-7165175.jpeg?auto=compress&cs=tinysrgb&w=600"},
    {id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$35.00", rating: 5, img: "https://images.pexels.com/photos/4969872/pexels-photo-4969872.jpeg?auto=compress&cs=tinysrgb&w=600"},
])
  
  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<HomeView /> } />
          <Route path="/products" element={<ProductsView /> } />
          <Route path="/categories" element={<CategoriesView /> } />
          <Route path="/products/:id" element={<ProductDetailsView /> } />
          <Route path="/contacts" element={<ContactsView /> } />
          <Route path="/search" element={<SearchView /> } />
          <Route path="/compare" element={<CompareView /> } />
          <Route path="/wishlist" element={<WishListView /> } />
          <Route path="/shoppingcart" element={<ShoppingCartView /> } />
          <Route path="*" element={<NotFoundView /> } />
        </Routes>
      </ProductContext.Provider>
    </BrowserRouter>
  
  );
}

export default App;



