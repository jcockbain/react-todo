const { dummyDb } = require("../db/db");

const getAllTasks = () => {
  return dummyDb;
};

module.exports = {
  getAllTasks,
};