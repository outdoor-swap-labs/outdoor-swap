import React, { useState, useEffect } from 'react';
import SingleItem from './SingleItem.jsx';

function Home() {
  const mockData = [{ item: 'item1' }, { item: 'item2' }];

  const [items, setItems] = useState(mockData);

  useEffect(() => {
    let isLoaded = false;
    async function loadItems() {}
    loadItems();
    return () => {
      isLoaded = true;
    };
  }, []);

  const itemArr = items.map((el, index) => {
    return <SingleItem key={index} id={index} item={el} />;
  });

  return <div>{itemArr}</div>;
}

export default Home;
