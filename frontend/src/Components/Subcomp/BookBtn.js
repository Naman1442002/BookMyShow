import React from 'react';

// A simple button component for booking
function BookBtn({ BookBtn }) {
  return (
    // Render a button with the class name 'BookBtn' and an onClick event handler.
    <button className='BookBtn' onClick={BookBtn}>
      Book Now
    </button>
  );
}

export default BookBtn;
