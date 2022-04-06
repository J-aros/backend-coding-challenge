const mongoose = require("mongoose");
require("dotenv").config();

//Mongodb connection
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost/myFirstDatabase"
    );
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
