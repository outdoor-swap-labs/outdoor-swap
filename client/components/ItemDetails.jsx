import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ReservationPopup from './ReservationPopup';
import '../assets/scss/FocusedItem.scss';

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
      <div className="focused-item">
        <ul>
          <li>
            <img src={details.photo} />
          </li>
          <li>Category: {details.category}</li>
          <li>Location: {details.location}</li>
          <li>Size: {details.size}</li>
          <li>Description: {details.description}</li>
          <li>Number Accomodated: {details.number_accomodated}</li>
          <li>Price: {details.price}</li>
        </ul>
        <button onClick={() => navigate(-1)}>Go back </button>
        <button onClick={() => setButtonPopup(true)}>Make Reservation</button>
        <ReservationPopup
          itemId={id}
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        />
      </div>
    </>
  );
}

export default ItemDetails;
