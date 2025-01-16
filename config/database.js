const mongoose = require('mongoose');

require("dotenv").config();

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser : true,
    useUnifiedTopology: true,
  })
  .then( () => console.log("Database connected successfully....!!"))
  .catch((error) => {
    console.log("Error occured while DB Connection....!!");
    console.error(error.message);
    process.exit(1);
  });
  
} 

module.exports = dbConnect;