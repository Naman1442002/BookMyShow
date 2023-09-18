import React, { useContext } from 'react';
import UnitBlock from './Subcomp/UnitBlock'; // Assuming 'UnitBlock' is a component
import { slots } from './data'; // Assuming 'slots' is an array of time slots
import Context from './Context/CreateContext'; // Assuming you're using a context to manage state

function Time() {

  // Accessing 'slot' and 'setslot' from the context
  const { slot, setslot } = useContext(Context);

  // function pass as props to set the movie state in unitblock component on user click
  const selectBlockContent = (value) => {
    setslot(value);
    // setting the user selection to local storage
    window.localStorage.setItem('slot', value)
  }

  return (
    <>
      <div className='time' >
        <h2>Select a Time Slot</h2>
        <div className='time-content' >
          {
            // Mapping over 'slots' to render UnitBlock components
            slots.map((slt, idx) => (
              <UnitBlock
                key={idx}
                text={slt}
                SelectContent={slot}
                selectBlockContent={selectBlockContent} // Set the selected time slot in the context
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Time;
