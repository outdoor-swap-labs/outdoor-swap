import React from 'react';
import { useNavigate } from 'react-router-dom';

function SingleItem({ item }) {
  const {
    available,
    category,
    description,
    id,
    location,
    number_accomodated,
    photo,
    price,
    size,
  } = item;

  const navigate = useNavigate();

  return (
    <div className="item-card">
      <ul>
        <li>
          <img className="item-img" src={photo} />
        </li>
        <li>Item: {category}</li>
        <li>Price: {price}</li>
        <li>Location: {location}</li>
        <li>Availability: {`${available}`}</li>
        <button onClick={() => navigate(`item-details/${id}`)}>
          View more
        </button>
      </ul>
    </div>
  );
}

export default SingleItem;
