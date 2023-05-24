import React, { useState, useEffect } from 'react';
import SingleItem from './SingleItem.jsx';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let isLoaded = false;
    async function loadItems() {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }
    loadItems();
    return () => {
      isLoaded = true;
    };
  }, []);

  const itemArr = items.map((el, index) => {
    return <SingleItem key={index} id={el.id} item={el} />;
  });

  return <div className="items-container">{itemArr}</div>;
}

export default Home;
