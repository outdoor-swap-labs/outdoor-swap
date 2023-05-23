import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MainNavBar from './components/MainNavBar';
import RentedItems from './components/RentedItems';
import './assets/scss/reset.scss';
import './assets/scss/NavBar.scss';
// import './assets/scss/test.scss';

function App(props) {
  return (
    <>
      <MainNavBar className="nav" />
      <Routes>
        <Route path="/rented_items" element={<RentedItems />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
