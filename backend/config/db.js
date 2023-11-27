const mongoose = require("mongoose");

require("dotenv").config(); // Load environment variables from .env

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Connected to database`);
};

module.exports = connectDB;
