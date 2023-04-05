const mongoose = require('mongoose');

const db = process.env.DB;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB is connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
