import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import '../assets/scss/popup.scss';
import '../assets/scss/DatePicker.scss';

// import 'react-datepicker/dist/react-datepicker.css';

// // CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function ReservationPopup({ trigger, setTrigger, itemId }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  const submitDate = () => {
    console.log(startDate, 'start');
    console.log(endDate, 'endDate');

    const reservationObject = {
      item_id: itemId,
      user_id: 6,
      date_reserved: startDate,
      date_returned: endDate,
    };

    async function createReservation() {
      try {
        const response = await fetch('api/reservation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reservationObject),
        });
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }
    createReservation();

    setTrigger(false);
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="start-date">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="end-date">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
          <button onClick={() => submitDate()}>Submit</button>
          <button onClick={() => setTrigger(false)}>Close</button>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default ReservationPopup;
