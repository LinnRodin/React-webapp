import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactsView from './Views/ContactsView';
import HomeView from './Views/HomeView';
import NotFoundView from './Views/NotFoundView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView /> } />
        <Route path="/contacts" element={<ContactsView /> } />
        <Route path="*" element={<NotFoundView /> } />
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
