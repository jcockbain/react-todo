import React from "react";

import DatePicker from "../../elements/datepicker";
import TaskInput from "../../elements/task-input";

import classes from "./task-form.module.css";

const TaskForm = props => {
  return (
    <div className={classes.taskFormContainer}>
      <div className={classes.addTask}>
        <div className={classes.submitButton}>
          <button>Submit</button>
        </div>
        <div>
          <TaskInput />
          <DatePicker />
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
