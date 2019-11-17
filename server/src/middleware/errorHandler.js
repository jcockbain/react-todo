const { logError } = require('../utils');

function handleErrors(error, req, res, next) {
  logError(error);
  const statusCode = error.status || 500;
  res.status(statusCode).send({
    error: error.message,
  });
}

module.exports = {
  handleErrors,
};
