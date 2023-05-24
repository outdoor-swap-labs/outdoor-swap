import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ItemDetails(props) {
  const params = useParams();
  console.log('these are the params inside of item details', params);
  const { id } = props;
  console.log('these are the props of itemDetails', props);
  const [details, setDetails] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    let receivedDets = false;
    async function getDetails() {
      const response = await fetch(`/api/item/${params.id}`);
      const data = await response.json();
      setDetails(data);
    }
    getDetails(id);
    return () => {
      receivedDets = true;
    };
  }, []);

  return (
    <>
      <div>These are the details of your item</div>
      <p>{details}</p>
      <button onClick={() => navigate(-1)}>Go back </button>
    </>
  );
}

export default ItemDetails;
