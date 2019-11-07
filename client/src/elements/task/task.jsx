import React from "react";

import PropTypes from "prop-types";

import classes from "./task.module.css";

const Task = ({ task, index }) => {
  return (
    <div className={classes.task}>
      <div className={classes.taskDescription}>{task.description}</div>
      <div className={classes.taskButtons}>
        <button onClick={() => {}}>Edit</button>
        <button onClick={() => {}}>
          {task.completed ? "Uncomplete" : "Complete"}
        </button>
        <button className={classes.deleteButton} onClick={() => {}}>
          x
        </button>
      </div>
    </div>
  );
};

Task.propTypes = {};

export default Task;
