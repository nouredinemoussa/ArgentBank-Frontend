import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import SignInPage from './SignInPage/SignInPage';
import UserPage from './UserPage/UserPage';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={< SignInPage />} />
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
