const express = require("express");

const tasksController = require("../controllers/tasks.controller");

const router = express.Router();

router
  .route("/")
  .get(tasksController.getTasks)
  .post(tasksController.postTask);

router.get("/:id", tasksController.getTask);

router.route("/reset").post(tasksController.resetTasks);

module.exports = router;
