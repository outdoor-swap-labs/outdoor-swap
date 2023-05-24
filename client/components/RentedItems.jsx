// function that fetches the item id of that user reservation
import React, { useState, useEffect } from 'react';
import '../assets/scss/DisplayContainer.scss';

function RentedItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Replace with actual user id
    const userId = 6;
    fetch(`/api/user/${userId}/reservations`)
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        setItems(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      {/* <h1>These are your Rented Items!</h1> */}
      {items.map((item, index) => (
        <div key={index} className="item-card item-img">
          <ul>
            <li>
              <img src={item.photo} alt={item.description} />
            </li>
            <li>{item.description}</li>
            <li>Price: {item.price}</li>
            <li>Category: {item.category}</li>
            <li>Size: {item.size}</li>
            <li>Location: {item.location}</li>
            <li>Reserved Date: {item.date_reserved}</li>
            <li>Return Date: {item.date_returned}</li>

            {/* <p>Available: {item.available ? 'Yes' : 'No'}</p> */}
          </ul>
        </div>
      ))}
    </div>
  );
}

{
  /* <ul>
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
  <ul> */
}

export default RentedItems;
