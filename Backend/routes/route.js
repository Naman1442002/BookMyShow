// Import the necessary dependencies
const express = require('express');
const bmtController = require('../controller/movieTIcket'); // Import the controller module
const router = express.Router();

// Middleware to parse JSON request bodies
router.use(express.json());

// Define routes and associate them with controller functions
router.post('/booking', bmtController.createbmt); // Route for creating a new movie ticket
router.get('/booking', bmtController.getlastticket); // Route for getting the last movie ticket

// Export the router for use in other parts of the application
exports.router = router;
