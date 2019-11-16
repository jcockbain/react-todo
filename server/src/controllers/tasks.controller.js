const repository = require("../repositories/task-repository");

const getTasks = (req, res, next) => {
  repository
    .findAll()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      next(err);
    });
};

const getTask = (req, res, next) => {
  const { id } = req.params;
  repository
    .findById(id)
    .then(task => {
      res.json(task);
    })
    .catch(err => {
      next(err);
    });
};

const postTask = (req, res) => {
  const { description, completeBy, completed } = req.body;
  repository
    .create(description, completeBy, completed)
    .then(task => {
      res.json(task);
    })
    .catch(error => console.log(error));
};

const putTask = (req, res, next) => {
  const { id } = req.params;
  const task = {
    description: req.body.description,
    completeBy: req.body.completeBy,
    completed: req.body.completed,
  };
  repository
    .updateById(id, task)
    .then(res.status(task))
    .catch(err => next(err));
};

const deleteTask = (req, res, next) => {
  const { id } = req.params;
  repository
    .deleteById(id)
    .then(ok => {
      console.log(ok);
      console.log(`Deleted task with id: ${id}`);
      res.sendStatus(200);
    })
    .catch(err => next(err));
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
  getTask,
  postTask,
  putTask,
  deleteTask,
  resetTasks,
};
