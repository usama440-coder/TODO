const mongoose = require("mongoose");

const connectDB = () => {
  try {
    let connection;
    const mode = process.env.MODE;
    if (mode === "TEST") {
      connection = mongoose.connect(process.env.MONGO_URI_TEST);
    } else {
      connection = mongoose.connect(process.env.MONGO_URI);
    }
    console.log("Database connected " + mode);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
