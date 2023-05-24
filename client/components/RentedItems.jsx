// function that fetches the item id of that user reservation
import React, { useState, useEffect } from 'react';
import '../assets/scss/RentedItems.scss';

function RentedItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Replace with actual user id
    const userId = 6;
    fetch(`/api/user/${userId}/reservations`)
      .then(response => response.json())
      .then(data => {
        console.log('data', data)
        setItems(data)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>These are your Rented Items!</h1>
      <div className="space">
      </div>
      {items.map((item, index) => (
        <ul>
          <li>
        <div key={index} className="details">
          <h2>{item.description}</h2>
          <p>Price: {item.price}</p>
          {/* <p>Category: {item.category}</p>
          <p>Size: {item.size}</p>
          <p>Location: {item.location}</p>
          <p>Reserved Date: {item.date_reserved}</p>
          <p>Return Date: {item.date_returned}</p> */}
          <div class="product">
          <img src={item.photo} alt={item.description} />
          </div>
          {/* <p>Available: {item.available ? 'Yes' : 'No'}</p> */}
        </div>
        </li>
        </ul>
      ))}
    </div>
);
}

{/* <ul>
  <li>
    <div class="details">
      <h2>Team Rainbow Unicorn</h2>
      <p>$25</p>
      <div class="product">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/threadless01.jpg">
      </div>
    </div>
  </li>
  <li>
  <ul> */}

export default RentedItems;