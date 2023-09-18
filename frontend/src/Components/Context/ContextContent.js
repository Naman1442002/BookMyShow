import React, { useEffect, useState } from 'react';
import Context from './CreateContext';
import axios from 'axios';

// Context State Component
function ContextState(props) {
  // State to manage booking data while posting
  const [movie, setmovie] = useState('');
  const [slot, setslot] = useState('');
  const [seats, setseat] = useState({
    "A1": 0,
    "A2": 0,
    "A3": 0,
    "A4": 0,
    "D1": 0,
    "D2": 0
  });

  // State to manage lastBooking Details
  const [lastBooking, setlastBooking] = useState(null);
  const [isError, setisError] = useState(false);
  const [message, setmessage] = useState('');
  const [variant, setvariant] = useState('')

  // Initially fetching last booking details and preserved user response so to protect it after page reload
  useEffect(() => {
    const fetchLBD = async () => {
      try {
        const getLastBooking = await axios.get("https://bookmyshow-api-jir2.onrender.com/api/booking");
        setlastBooking(getLastBooking.data[0]);
      } catch (error) {
        console.error("Error fetching last booking:", error.message);
      }
    };

    // Preserverd the user selection in localStorage
    setmovie(window.localStorage.getItem('movie'))
    setslot(window.localStorage.getItem('slot'))
      if(window.localStorage.getItem('seat'))
        { setseat( JSON.parse( window.localStorage.getItem('seat')))}

    fetchLBD();
  }, []);

  
  // Function used to post booking info to the backend and fetch the latest last booking details
  const onclickBookBtn = async () => {
    try {
      // Submit the booking details only if movie and slot state are not empty
      if (movie !== '' && slot !== '') {
         const res = await axios.post("https://bookmyshow-api-jir2.onrender.com/api/booking", {
          "movie": movie,
          "slot": slot,
          "seats": seats
        })

          setisError(true);
          setvariant('success')
          setmessage("Booking Successful");
          
          setlastBooking(res.data);
          // console.log(JSON.stringify( res.data))
      

        // After posting the movie details, reset all the state data
          setmovie('');
          setslot('');
          setseat({
            "A1": 0,
            "A2": 0,
            "A3": 0,
            "A4": 0,
            "D1": 0,
            "D2": 0
          });
          // Clear the success message and error after 5 seconds
          setTimeout(() => {
            setmessage('');
            setisError(false);
            setvariant('')

          }, 2200);
          // clear local storage
            window.localStorage.clear();
            
      } else {
        // If submitted before movie and slot fields are empty, display an alert
        setisError(true);
        setvariant("danger")
        setmessage("First fill the required data!!");

        // Clear the error message after 3.5 seconds
        setTimeout(() => {
          setmessage('');
          setisError(false);
        }, 2000);
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
