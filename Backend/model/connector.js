// Import required dependencies and schema definition
const mongoose = require('mongoose');
const dotenv = require('dotenv')

// Load environment variables from the '.env' file
dotenv.config();

// Retrieve MongoDB connection string from environment variables
const mongoURI = process.env.CONNECTION_STRING;
console.log(mongoURI)
// Establish the MongoDB connection
// main().catch(err => console.error(err));

async function main() {
  try {
    // Connect to MongoDB using the provided connection string
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connection established with MongoDB server online");
  } catch (err) {
    // Handle any errors that occur during the connection process
    console.error("Error while connecting to MongoDB:", err);
  }
}


module.exports = main;