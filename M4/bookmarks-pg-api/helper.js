const customErrorHandler = (e, req, res, next) => {
  console.log(`[ERROR]: ${e}`);

  res.status(e.statusCode).json({
    error: e.name,
    message: e.message,
  });
};

class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.name = "ValidationError";
    this.statusCode = "400";
    this.message = message;
  }
}

class RecordNotCreatedError extends Error {
  constructor(message) {
    super(message);

    this.name = "RecordNotCreatedError";
    this.statusCode = "500";
    this.message = message;
  }
}

module.exports = {
  RecordNotCreatedError,
  ValidationError,
  customErrorHandler,
};
