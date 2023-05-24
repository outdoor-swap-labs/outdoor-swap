import React, { useState, useEffect } from 'react';

function RentedItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Replace with actual user id
    const userId = 6;
    fetch(`/api/user/${userId}/reservations`)
      .then(response => response.json())
      .then(data => {
        console.log('data',data)
        setItems(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.photo} alt={item.description} />
          <p>Category: {item.category}</p>
          <p>Size: {item.size}</p>
          <p>Price: {item.price}</p>
          <p>Location: {item.location}</p>
          <p>Reserved Date: {item.date_reserved}</p>
          <p>Return Date: {item.date_returned}</p>
          {/* <p>Available: {item.available ? 'Yes' : 'No'}</p> */}
          <p>Description: {item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RentedItems;
