const getTasks = (req, res, next) => {
  try {
    const tasks = req.tasks.getTasks();
    res.status(200).send(tasks);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getTasks,
};
