// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import './App.css'
import HomePage from './HomePage/HomePage';
import SignInPage from './SignInPage/SignInPage';
import UserPage from './UserPage/UserPage';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route
          path="/user/:id"
          element={
            <PrivateRoute>
              <UserPage />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
