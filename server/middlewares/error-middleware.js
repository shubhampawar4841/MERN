const errorMiddleware = (err, req, res, next) => {
  // Default values for status, message, and extraDetails
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  const extraDetails = err.extraDetails || "Error from the backend";

  // Log the error with method, path, status code, and extra details
  console.error(`[${req.method}] ${req.path} >> StatusCode: ${status}, Message: ${extraDetails}`);

  // Return the error as JSON response with appropriate status code
  return res.status(status).json({ error: message, extraDetails });
};

module.exports = errorMiddleware;
