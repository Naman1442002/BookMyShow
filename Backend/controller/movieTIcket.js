const { bookmovieticket } = require("../model/schema"); // Importing the 'bookmovieticket' model

// Controller function to create a movie ticket booking
exports.createbmt = async (req, res) => {
  
      // Create a new 'bookmovieticket' instance using the request body
      const bmt = new bookmovieticket(req.body);
      await bmt.save()
      .then((data)=>{
         if (data) {
            res.status(200).json({ message:"Booking Successful!!"}); // Return the last booking data as JSON            
         }
         else {
            res.status(404).json({message: 'Bad Request' })
         }
      })
      .catch((error)=>{
         console.error("Error:", error);
         res.status(500).send("Internal Server Error");
      }) 

  
}

// Controller function to get the last movie ticket booking
exports.getlastticket = async (req, res) => {

   // Find the last movie ticket booking by sorting by '_id' in descending order and limiting to 1 result
   bookmovieticket.find().sort({ _id: -1 }).limit(1)
      .then((data) => {
         if (data.length!=0) {
            res.status(200).json(data); // Return the last booking data as JSON            
         }
         else {
            res.status(404).json({ message: 'No booking found.' })
         }
      })
      .catch((err) => {
         console.error("Error:", err);
         res.status(500).send("Internal Server Error");
      })

}


