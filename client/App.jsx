import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MainNavBar from './components/MainNavBar';
import RentedItems from './components/RentedItems';
import './assets/styles.scss';

const id = 1;

function App(props) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function getUser() {
      try {
        const response = await fetch(`/api/test/${id}`);
        const data = await response.json();
        console.log(data);
        setUserName(data);
      } catch (err) {
        console.log(err);
      }
    }
    let ignore = false;
    getUser();
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <>
      <MainNavBar userName={userName} />
      <Routes>
        <Route path="/rented_items" element={<RentedItems />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
