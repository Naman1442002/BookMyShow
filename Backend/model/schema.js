// Import the 'Schema' class from Mongoose
const { Schema } = require('mongoose');
const mongoose = require('mongoose');


// Define the schema for booking movie tickets
const bookMovieSchema = new Schema({
    movie: String, // Field to store the movie name (String)
    slot: String, // Field to store the time slot (String)
    seats: {
        A1: Number, // Field to store the number of seats in category A1 (Number)
        A2: Number, // Field to store the number of seats in category A2 (Number)
        A3: Number, // Field to store the number of seats in category A3 (Number)
        A4: Number, // Field to store the number of seats in category A4 (Number)
        D1: Number, // Field to store the number of seats in category D1 (Number)
        D2: Number  // Field to store the number of seats in category D2 (Number)
    }
});

// Export the Mongoose model for booking movie tickets
exports.bookmovieticket = mongoose.model('bookmovieticket', bookMovieSchema);