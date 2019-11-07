import React from "react";

import DatePicker from "../../elements/datepicker";
import TaskInput from "../../elements/task-input";

import classes from "./task-form.module.css";

const TaskForm = props => {
  return (
    <div className={classes.taskFormContainer}>
      Add a new task
      <div className={classes.addTask}>
        <TaskInput />
        <DatePicker />
      </div>
    </div>
  );
};

export default TaskForm;
