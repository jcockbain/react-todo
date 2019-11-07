const ServerError = require("./ServerError");

class ResponseError extends ServerError {
  constructor(status, message) {
    super(status || 500, message || "Error in API Call");
  }
}
module.exports = ResponseError;
