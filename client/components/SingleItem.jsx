import React from 'react';

function SingleItem({ id, item }) {
  return (
    <div className="item">
      <ul>
        <li>Item: {item.item}</li>
      </ul>
    </div>
  );
}

export default SingleItem;
