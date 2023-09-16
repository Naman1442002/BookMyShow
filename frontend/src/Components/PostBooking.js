import React, { useContext } from 'react';
import Movies from './Movies'; // Assuming this component handles movie selection
import Time from './Time'; // Assuming this component handles time slot selection
import Seats from './Seats'; // Assuming this component handles seat selection
import BookBtn from './Subcomp/BookBtn'; // Assuming this component represents a booking button
import Context from './Context/CreateContext'; // Assuming you're using a context to manage state

function PostBooking() {
  // Accessing the 'onclickBookBtn' function from the context
  const { onclickBookBtn } = useContext(Context);

  return (
    <>
      <div>
        {/* Render sub-components for movie, time slot, and seat selection */}
        <Movies />
        <Time />
        <Seats />

        {/* Render a booking button with the 'onclickBookBtn' function */}
        <BookBtn text='Book Now' BookBtn={onclickBookBtn} />
      </div>
    </>
  )
}

export default PostBooking;
