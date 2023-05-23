import React from 'react';
import { NavLink } from 'react-router-dom';

function MainNavBar({ userName }) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/rented_items">Rented Items</NavLink>
      Welcome {userName}!!
    </nav>
  );
}

export default MainNavBar;
