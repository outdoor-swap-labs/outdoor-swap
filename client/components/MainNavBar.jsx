import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function MainNavBar() {
  const [userName, setUserName] = useState('');
  const id = 6;

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
    <nav className="navStyle">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/rented_items">Rented Items</NavLink>
      <NavLink to="">{`Hello ${userName}!`}</NavLink>
    </nav>
  );
}

export default MainNavBar;
