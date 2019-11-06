const tasksService = require("../services/tasks.service");

const getTasks = (req, res, next) => {
  try {
    const tasks = tasksService.getAllTasks();
    res.status(200).send(tasks);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTasks,
};
