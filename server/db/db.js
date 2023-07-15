const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    let connection;
    const mode = process.env.MODE;
    connection = await mongoose.connect(process.env.MONGO_URI_TEST);
    // if (mode === "TEST") {
    //   connection = await mongoose.connect(process.env.MONGO_URI_TEST);
    // } else {
    //   connection = await mongoose.connect(process.env.MONGO_URI);
    // }
    console.log("Database connected " + mode);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
