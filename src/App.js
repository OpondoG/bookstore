import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Books from './Pages/books';
import Category from './Pages/category';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
