const express = require("express");

const tasksController = require("../controllers/tasks.controller");

const router = express.Router();

router.route("/")
  .get(
    tasksController.getTasks
  );

module.exports = router;
