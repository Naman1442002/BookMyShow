import React from "react";

// Unit Seat Component
function Seat({ text, seats, setseat, setmessage, setisError, setvariant }) {
  // Apply 'visit' class if the Seat input has a value of 0
  let visit = seats[text] === 0 ? "" : "visit";

  // Function for validating input value
  const stop = (e) => {
    e.stopPropagation();
    const inputValue = Number(e.target.value);

    if (inputValue >= 0 && inputValue <= 10) {
      setseat({ ...seats, [e.target.name]: inputValue });
      // setting the user selection to local storage
      window.localStorage.setItem(
        "seat",
        JSON.stringify({ ...seats, [e.target.name]: inputValue })
      );
    } else {
      // Display a warning message for invalid input
      setisError(true);
      setmessage("Selected value must be between 0-10");
      setvariant("warning");

      // Clear the warning message and variant after 3 seconds
      setTimeout(() => {
        setisError(false);
        setmessage("");
        setvariant("");
      }, 2000);
    }
  };

  // Function to stop click event propagation
  const handleInputChange = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`seat-unit ${visit}`}>
      <label htmlFor="seats">{`Type ${text}`}</label> <br />
      <input
        type="number"
        name={text}
        id="seats"
        value={seats[text]}
        style={{ width: "50px" }}
        max={10}
        onChange={stop}
        onClick={handleInputChange}
      />
    </div>
  );
}

export default Seat;
