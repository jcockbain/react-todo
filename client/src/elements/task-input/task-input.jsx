import React, { useState } from "react";
import PropTypes from "prop-types";

import classes from "./task-input.module.css";

const TaskInput = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={classes.createTask}
        value={value}
        placeholder="Add a new task"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

TaskInput.propTypes = {};

export default TaskInput;
