import React, { useState } from "react";

import DatePicker from "../../elements/datepicker";
import TaskInput from "../../elements/task-input";

import classes from "./task-form.module.css";

const TaskForm = ({ submitTask }) => {
  const [taskDescription, setTaskDescription] = useState("");
  const [completeBy, setCompleteBy] = useState(undefined);

  return (
    <div className={classes.taskFormContainer}>
      <div className={classes.addTask}>
        <div className={classes.submitButton}>
          <button
            onClick={() =>
              submitTask({
                description: taskDescription,
                completeBy,
                completed: false,
              })
            }
          >
            Submit
          </button>
        </div>
        <div>
          <TaskInput addTask={setTaskDescription} />
          <DatePicker addDate={setCompleteBy} />
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
