const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode ? res.statusCode : 500;
  let message = err.message;

  //   mongoose cast object error
  if (err.name === "CastError") {
    message = "Resource not found";
    statusCode = 404;
  }

  //   mongoose validation error
  if (err.code === 1100) {
    message = "Duplicate key error";
    statusCode = 400;
  }

  //   mongoose validation error
  if (err.name === "ValidationError") {
    message = "Validation Error";
    statusCode = 400;
  }

  res
    .status(statusCode)
    .json({ success: false, message: message || "Internal server error" });
};

module.exports = errorHandler;
