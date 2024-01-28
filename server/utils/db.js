const mongoose = require("mongoose");
const dontenv= require('dotenv');
dontenv.config();

 const URI = process.env.MONGODB_URI;
console.log(URI);

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

module.exports = connectDb;