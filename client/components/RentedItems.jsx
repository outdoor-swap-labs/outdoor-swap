// import React from 'react';

// function RentedItems() {
//   return <div>These are the RentedItems</div>;
// }

// export default RentedItems;

// function that fetches the item id of that user reservation

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
        // Assuming data is an array of reservations
        const promises = data.map(reservation =>
          fetch(`/api/item/${reservation.item_id}`).then(response => response.json())
        );
        return Promise.all(promises);
      })
      .then(itemsData => {
        console.log('itemsdata', itemsData)
        setItems(itemsData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  console.log(items)

  return (
    <div>
      <h1>Rented Items</h1>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.photo} alt={item.description} />
          <p>Category: {item.category}</p>
          <p>Size: {item.size}</p>
          <p>Price: {item.price}</p>
          <p>Location: {item.location}</p>
          {/* <p>Available: {item.available ? 'Yes' : 'No'}</p> */}
          <p>Description: {item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default RentedItems;
