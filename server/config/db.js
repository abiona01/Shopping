require('dotenv').config();
const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connection SUCCESS'.cyan.underline);
  } catch (error) {
    console.error('MongoDB connection FAIL');
    process.exit(1);
  }
};

module.exports = connectDB;
