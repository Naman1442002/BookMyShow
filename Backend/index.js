// Import required dependencies
const express = require("express"); // Express.js framework
const { router } = require('./routes/route'); // Import the router from the 'routes' module
const dotenv = require('dotenv'); // Load environment variables from a '.env' file
const cors = require('cors'); // Middleware for enabling Cross-Origin Resource Sharing (CORS)
const main = require('./model/connector')

// Create an Express application
const app = express();

// Load environment variables from the '.env' file
dotenv.config();

// Establish the MongoDB connection
main()
.then(()=>{console.log('success')})
.catch(err => console.error(err));


// Enable CORS middleware to allow cross-origin requests
app.use(cors());

// Define a route for handling booking-related APIs under the '/api/booking' path
app.use('/api/booking', router);

// Start the Express server, listening on the specified port from environment variables
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`));
