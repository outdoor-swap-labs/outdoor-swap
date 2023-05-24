import React from 'react';
import '../assets/scss/popup.scss';

function ReservationPopup({ trigger, setTrigger }) {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button onClick={() => setTrigger(false)}>Close</button>
        <p>
          fjkhdsjkfhjkahsfjkhajksdhfjkadhsjkfhadjksfhjkasdhfkadhsfjkhsdkhfjkahsd
          jksfhjkas jkfhsjkdhfjkadhs fdhsfjkadhs fjkdhfjkhasjkfhajksdhfls
          aksdfhaksdh adsfghadfdjksdlfgh dkfhaksdjhfks adsfhasdjkfhaksdfh
          skhadskjfh
        </p>
      </div>
    </div>
  ) : (
    ''
  );
}

export default ReservationPopup;
