import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import classes from "./task-input.module.css";

const TaskInput = ({ addTask, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (value) {
      addTask(value);
    }
  }, [value]);

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
        placeholder="Task description"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

TaskInput.propTypes = {};

export default TaskInput;
