import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import TaskInput from "../task-input";

import classes from "./task.module.css";

const Task = ({ task, deleteTask, putTask }) => {
  const [taskDescription, setTaskDescription] = useState(task.description);

  useEffect(() => {
    putTask(task.id, taskDescription);
  }, [taskDescription]);

  const onChange = () =>
    putTask(task.id, {
      ...task,
      description: taskDescription,
    });

  return (
    <div
      style={
        new Date() > new Date(task.completeBy)
          ? { backgroundColor: "orange" }
          : {}
      }
      className={classes.task}
    >
      <div className={classes.taskDescription}>
        <TaskInput
          defaultValue={taskDescription}
          addTask={setTaskDescription}
        />
      </div>
      <div className={classes.taskButtons}>
        <button
          style={{ backgroundColor: "green" }}
          className={classes.complete}
          onClick={() =>
            putTask(task.id, { ...task, completed: !task.completed })
          }
        >
          {task.completed ? "Uncomplete" : "Complete"}
        </button>
        <button
          style={{ backgroundColor: "#C70D3A" }}
          onClick={id => deleteTask(task.id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

Task.propTypes = {};

export default Task;
