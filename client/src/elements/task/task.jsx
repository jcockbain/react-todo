import React from "react";

import PropTypes from "prop-types";

import classes from "./task.module.css";

const Task = ({ task, index }) => {
  return (
    <div className={classes.task}>
      {task.description}
      <button className={classes.deleteButton} onClick={() => {}}>
        x
      </button>
      <button onClick={() => {}}>
        {task.completed ? "Uncomplete" : "Complete"}
      </button>
    </div>
  );
};

Task.propTypes = {};

export default Task;
