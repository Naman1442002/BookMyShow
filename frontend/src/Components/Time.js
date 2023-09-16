import React, { useState, useContext } from 'react';
import UnitBlock from './Subcomp/UnitBlock'; // Assuming 'UnitBlock' is a component
import { slots } from './data'; // Assuming 'slots' is an array of time slots
import Context from './Context/CreateContext'; // Assuming you're using a context to manage state

function Time() {
  // State to manage the selected time slot
  const [bg, setbg] = useState(null);

  // Function to handle selecting a time slot block
  const selectBlock = (value) => {
    setbg(value);
  }

  // Accessing 'slot' and 'setslot' from the context
  const { slot, setslot } = useContext(Context);

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
                selectBlock={selectBlock}
                selectBlockContent={(value) => { setslot(value) }} // Set the selected time slot in the context
                visit={slot === '' ? '' : bg === slt ? 'visit' : ''} // Apply 'visit' class if the time slot is selected
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Time;
