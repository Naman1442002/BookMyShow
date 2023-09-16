import React, { useContext } from 'react';
import Seat from './Subcomp/Seat'; // Assuming 'Seat' is a component
import { seatdata } from './data'; // Assuming 'seatdata' is an array of seat information
import Context from './Context/CreateContext'; // Assuming you're using a context to manage state

function Seats() {
  // Accessing state and functions from the context
  const { seats, setseat, setvariant, setmessage, setisError } = useContext(Context);

  return (
    <>
      <div className='seat' >
        <h2>Select a seat</h2>
        <div className='seat-content' >
          {
            // Mapping over 'seatdata' to render Seat components
            seatdata.map((set, idx) => (
              <Seat
                key={idx}
                text={set}
                seats={seats}
                setseat={setseat}
                setmessage={setmessage}
                setisError={setisError}
                setvariant={setvariant}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Seats;
