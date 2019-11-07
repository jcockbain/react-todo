import React from "react";

import PropTypes from "prop-types";

import classes from "./task.module.css";

const Task = ({ task, index }) => {
  return (
    <div className={classes.task}>
      <div className={classes.taskDescription}>{task.description}</div>
      <div className={classes.taskButtons}>
        <button style={{ backgroundColor: "#494CA2" }} onClick={() => {}}>
          Edit
        </button>
        <button
          style={{ backgroundColor: "green" }}
          className={classes.complete}
          onClick={() => {}}
        >
          {task.completed ? "Uncomplete" : "Complete"}
        </button>
        <button style={{ backgroundColor: "#C70D3A" }} onClick={() => {}}>
          x
        </button>
      </div>
    </div>
  );
};

Task.propTypes = {};

export default Task;
