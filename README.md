# BookMyShow Project

## Table of Contents
- Introduction
- Features
- Getting Started
  - Prerequisites
  - Installation
- Usage
- Technologies Used
- Contributing
- License

## Introduction
Welcome to the BookMyShow project! This web application enables users to book movie tickets online. Users can browse available movies, select a movie, choose a showtime, and book their preferred seats. The project utilizes both local storage and MongoDB for temporary and permanent data storage, respectively.

**Demo:** [BookMyShow Demo]


## Features
- Browse a list of available movies with details, including movie name and showtimes.
- Select a movie to view available showtimes.
- Reserve seats for a selected showtime.
- Save completed bookings to MongoDB for permanent storage and retrieval.
- View details of the last booked movie on the homepage.

## Getting Started
### Prerequisites
Before running the project, ensure you have the following prerequisites installed on your system:

- Node.js and npm: [Download Here](https://nodejs.org/)

### Installation
1. Clone the repository from GitHub:
   git clone https://github.com/Naman1442002/BookMyShow.git
   cd BookMyShow
2. Install the required dependencies:
    npm install

3. Set up the MongoDB connection:
- Make sure MongoDB is installed and running on your system.
- Create a MongoDB database for the BookMyShow project and note down the connection string.

4. Configure the application:
- Create a `.env` file in the root directory of the project.
- Add the following environment variables to the `.env` file:
  ```
  PORT=8080                  # The port on which the application will run
  MONGODB_URI= Connection_String  # The MongoDB connection string
  ```

## Usage
1. Start the application:  npm start
2. Access the BookMyShow application in your web browser at `http://localhost:3000`.
3. Browse the list of available movies, select a movie to view available showtimes, and reserve your desired seats.
4. Complete the booking process by providing necessary information.
5. You can view your last booked movie on the homepage.

## Technologies Used
- Node.js and Express.js for the server-side application.
- MongoDB with Mongoose for permanent data storage.
- Babel for transpiling modern JavaScript code for better browser compatibility.
- React for building the user interface.

## Contributing
We welcome contributions from the community! Follow these steps to contribute:
1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name (e.g., `feature/your-feature`).
3. Make your changes and commit them with a clear message (e.g., `git commit -m "Add feature XYZ"`).
4. Push your changes to your fork (e.g., `git push origin feature/your-feature`).
5. Submit a pull request, explaining your changes and why they should be merged.


## Acknowledgments
This project is maintained by the following contributors:
- Naman Pal [(GitHub Link)](https://github.com/Naman1442002/)


Thank you for using BookMyShow! For questions or assistance, feel free to contact us or open an issue in the repository. Enjoy booking your movies!
   
   
   
