import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReservationPopup from './ReservationPopup';

function ItemDetails(props) {
  const params = useParams();
  console.log('these are the params inside of item details', params);
  const { id } = props;
  const [details, setDetails] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    let receivedDets = false;
    async function getDetails() {
      const response = await fetch(`/api/item/${params.id}`);
      const data = await response.json();
      setDetails(data[0]);
      console.log('this is data inside of itemDetails fetch', data);
    }
    getDetails(id);
    return () => {
      receivedDets = true;
    };
  }, []);

  function reserve() {}

  /*
    available,
    category,
    description,
    id,
    location,
    number_accomodated,
    photo,
    price,
    size,
  */

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div>These are the details of your item</div>
      <ul>
        <li>
          <img className="focused-item-img" src={details.photo} />
        </li>
        <li>{details.category}</li>
        <li>{details.location}</li>
        <li>{details.size}</li>
        <li>{details.description}</li>
        <li>{details.number_accomodated}</li>
        <li>{details.price}</li>
      </ul>
      <button onClick={() => navigate(-1)}>Go back </button>
      <button onClick={() => setButtonPopup(true)}>Make Reservation</button>
      <ReservationPopup trigger={buttonPopup} setTrigger={setButtonPopup} />
    </>
  );
}

export default ItemDetails;
