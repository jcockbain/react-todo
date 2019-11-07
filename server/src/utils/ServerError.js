class ServerError extends Error {
  constructor(status, message) {
    super();
    this.name = this.constructor.name;
    this.status = status || 500;
    (this.message = message.replace("\n", " ")),
    // Removes the error class line from the stack trace
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ServerError;
