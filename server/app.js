const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db/db");
const errorHandler = require("./middleware/error.middleware");
const taskRouter = require("./routes/task.route");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/v1/task", taskRouter);

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
