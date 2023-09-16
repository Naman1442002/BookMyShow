import React, { useEffect, useState } from 'react';
import Context from './CreateContext';
import axios from 'axios';

// Context State Component
function ContextState(props) {
  // State to manage booking data while posting
  const [movie, setmovie] = useState('');
  const [slot, setslot] = useState('');
  const [seats, setseat] = useState({
    "A1": '',
    "A2": '',
    "A3": '',
    "A4": '',
    "D1": '',
    "D2": ''
  });

  // State to manage lastBooking Details
  const [lastBooking, setlastBooking] = useState(null);
  const [isError, setisError] = useState(false);
  const [message, setmessage] = useState('');
  const [variant, setvariant] = useState('')

  // Initially fetching last booking details
  useEffect(() => {
    const fetchLBD = async () => {
      try {
        const getLastBooking = await axios.get("http://localhost:8080/api/booking/getlastticket");
        setlastBooking(getLastBooking.data[0]);

      } catch (error) {
        console.error("Error fetching last booking:", error.message);
      }
    };
    fetchLBD();
  }, []);

  // Function used to post booking info to the backend and fetch the latest last booking details
  const onclickBookBtn = async () => {
    try {
      // Submit the booking details only if movie and slot state are not empty
      if (movie !== '' && slot !== '') {
        await axios.post("http://localhost:8080/api/booking/Createnewticket", {
          "movie": movie,
          "slot": slot,
          "seats": seats
        });
        setisError(true);
        setvariant('success')
        setmessage("Booking Successful");

        // Getting the latest last booking details and set it to lastBooking state
        const getLastBooking = await axios.get("http://localhost:8080/api/booking/getlastticket");
        setlastBooking(getLastBooking.data[0]);

        // After posting the movie details, reset all the state data
        setmovie('');
        setslot('');
        setseat({
          "A1": '',
          "A2": '',
          "A3": '',
          "A4": '',
          "D1": '',
          "D2": ''
        });

        // Clear the success message and error after 5 seconds
        setTimeout(() => {
          setmessage('');
          setisError(false);
          setvariant('')

        }, 5000);
      } else {
        // If submitted before movie and slot fields are empty, display an alert
        setisError(true);
        setvariant("danger")
        setmessage("First fill the required data!!");

        // Clear the error message after 3.5 seconds
        setTimeout(() => {
          setmessage('');
          setisError(false);
        }, 2200);
      }
    } catch (error) {
      // Console error if an error occurs during booking
      console.error("Error booking:", error.message);
    }
  };


  return (
    <Context.Provider value={{
      movie,
      seats,
      slot,
      lastBooking,
      isError,
      message,
      variant,
      setmovie,
      setseat,
      setslot,
      setvariant,
      setisError,
      setmessage,
      setlastBooking,
      onclickBookBtn,
      
    }}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextState;
