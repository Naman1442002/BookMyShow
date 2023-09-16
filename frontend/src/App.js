import './App.css';
import React, { useContext } from 'react';
import PostBooking from './Components/PostBooking';
import LastBooking from './Components/LastBooking';
import { Alert } from 'react-bootstrap';
import Context from './Components/Context/CreateContext';


function App() {


  // Accessing data from the Context
  const { message, isError, variant } = useContext(Context);

  return (
    <div className="App">
      <div className='Show-err'>
        {/* Display an alert if there's an error message */}
        {isError ? (
          (variant === "warning") ? <Alert variant='warning'>{message}</Alert> :
            (variant === "danger") ? <Alert variant='danger'>{message}</Alert> :
              (variant === "success") ? <Alert variant='success'>{message}</Alert> : ''
        ) : ''}

      </div>
      {/* Title */}
      <h1  style={{ marginLeft: '50px', marginTop: '55px' }}>&#128330; Book your show!! &#128330;</h1>

      {/* Content */}
      <div className='home' >

        {/* Component to post booking details */}
        <PostBooking />

        {/* Component to display last booking details */}
        <LastBooking />

      </div>

    </div>
  );
}

export default App;



