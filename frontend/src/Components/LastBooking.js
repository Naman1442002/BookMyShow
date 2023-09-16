import React, { useContext } from 'react';
import Context from './Context/CreateContext'; // Assuming you're using a context to manage state

function LastBooking() {
  const { lastBooking } = useContext(Context);

  // Render a message when there is no last booking found
  if (!lastBooking) {
    return (
      <div className='lastBooking'>
        <h3>Last Booking Details:</h3>
        <div>NO BOOKING FOUND</div>
      </div>
    )
  } else {

     const Seat = Object.entries(lastBooking.seats)
    // Render last booking details when available
    return (
      <div className='lastBooking'>
        <h3>Last Booking Details:</h3>
        <h5>Seats:</h5>
        {
          Seat.map(([key, set], idx)=>(
            <h5 key={idx}>{key}: <span style={{ fontWeight: 'normal' }}>{set || 0}</span></h5>
          ))
        }
        <h5>Slot: <span style={{ fontWeight: 'normal' }}>{lastBooking.slot}</span></h5>
        <h5>Movie: <span style={{ fontWeight: 'normal' }}>{lastBooking.movie}</span></h5>
      </div>
    )
  }
}

export default LastBooking;
