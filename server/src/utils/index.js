const logError = err => {
  console.log({
    error: {
      name: err.name,
      message: err.message,
    },
  });
};

module.exports = {
  logError,
};
