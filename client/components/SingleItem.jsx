import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/scss/ItemCard.scss';

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
        <li className="item-img">
          <img src={photo} />
        </li>
        <li>Item: {description}</li>
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
