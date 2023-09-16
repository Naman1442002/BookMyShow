require("../styles/App.css");
require("../styles/bootstrap.min.css");
const React = require("react");
const postBookingApi = require("../api/postBookingApi");
const getLastBookingApi = require("../api/getLastBookingApi");
const LastBooking = require("../components/LastBooking.jsx");
const { movies, slots, seats } = require("../components/data.js");

const BookTicket = () =>  {
  // Retrieve movie, slot, and seats data from local storage
  const localMovieName = localStorage.getItem("movie");
  const localMovieSlot = localStorage.getItem("slot");
  const localMovieSeats = JSON.parse(localStorage.getItem("seats"));

  // Initialize 'booking' state with default values or local storage data
  const [booking, setBooking] = React.useState({
    movie: localMovieName || "",
    slot: localMovieSlot || "",
    seats: localMovieSeats || {
      A1: 0,
      A2: 0,
      A3: 0,
      A4: 0,
      D1: 0,
      D2: 0,
    },
  });

  // Initialize 'lastBooking' state
  const [lastBooking, setLastBooking] = React.useState(null);

  // Generate a list of movie names as list items
  const movieNames = movies.map((movie) => (
    <li
      key={movie}
      className={`movie-column ${
        booking.movie === movie ? "movie-column-selected" : ""
      }`}
      onClick={() =>
        setBooking({
          ...booking,
          movie,
        })
      }>
      <b>{movie}</b>
    </li>
  ));

  // Generate a list of available time slots as list items
  const movieSlots = slots.map((slot) => (
    <li
      key={slot}
      className={`slot-column ${
        booking.slot === slot ? "slot-column-selected" : ""
      }`}
      onClick={() => setBooking({ ...booking, slot })}>
      <b>{slot}</b>
    </li>
  ));

  // Generate a list of available seats with input fields for number of seats
  const movieSeats = seats.map((seat, i) => (
    <li
      key={seat}
      className={`seat-column ${
        booking.seats[seat] ? "seat-column-selected" : ""
      }`}>
      <h5>Type {seat}</h5>
      <input
        type="number"
        min={0}
        name={seat}
        value={booking.seats[seat] > 0 ? booking.seats[seat] : ""}
        placeholder={0}
        onChange={(e) =>
          setBooking({
            ...booking,
            seats: {
              ...booking.seats,
              [seat]: parseInt(e.currentTarget.value) || 0,
            },
          })
        }
      />
    </li>
  ));

  // Update local storage with 'booking' data when 'booking' state changes
  React.useEffect(() => {
    localStorage.setItem("movie", booking.movie);
    localStorage.setItem("slot", booking.slot);
    localStorage.setItem("seats", JSON.stringify(booking.seats));
  }, [booking]);

  // Fetch and set the last booking data on component mount
  const getBookingData = async () => {
    const data = await getLastBookingApi();
    setLastBooking(data);
  };

  React.useEffect(() => {
    getBookingData();
  }, []);

  // Handle form submission
  const handleOnSubmit = async () => {
    // Post booking data to the API
    await postBookingApi(booking).then((res) => setLastBooking(res));

    // Clear the localStorage data after the form submission
    localStorage.clear();

    // Reset 'booking' state to default values
    setBooking({
      movie: "",
      slot: "",
      seats: {
        A1: 0,
        A2: 0,
        A3: 0,
        A4: 0,
        D1: 0,
        D2: 0,
      },
    });
  };

  // JSX structure of the 'BookTicket' component
  return (
    <section>
      <h1>Book that show!!</h1>
      <div className="booking-container">
        {/* booking form  */}
        <div>
          <div className="movie-row">
            <h3>Select a Movie</h3>
            <ul>{movieNames}</ul>
          </div>
          <div className="slot-row">
            <h3>Select a Time slot</h3>
            <ul>{movieSlots}</ul>
          </div>

          <div className="seat-row">
            <h3>Select Seats</h3>
            <ul>{movieSeats}</ul>
          </div>

          <div className="book-button">
            <button
              onClick={handleOnSubmit}
              disabled={!booking.movie || !booking}>
              Book Now
            </button>
          </div>
        </div>

        {/* Display last booking data */}
        <LastBooking lastBooking={lastBooking} />
      </div>
    </section>
  );
};

// Export the 'BookTicket' component for use in other modules
module.exports = BookTicket;