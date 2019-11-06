const getTasks = (req, res, next) => {
  try {
    const tasks = req.tasks.getTasks();
    res.status(200).send(tasks);
  } catch (err) {
    next(err);
  }
};

const postTask = (req, res, next) => {
  try {
    const { description, completeBy, completed } = req.body;
    req.tasks.addTask({
      description,
      completeBy,
      completed,
    });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

const resetTasks = (req, res, next) => {
  try {
    req.tasks.resetTasks();
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTasks,
  postTask,
  resetTasks,
};
