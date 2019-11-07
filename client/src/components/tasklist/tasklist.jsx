import React, { useState, useEffect } from "react";
import Task from "../../elements/task";

import classes from "./tasklist.module.css";
import TaskInput from "../../elements/task-input/task-input";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    {
      description: "Complete Homework",
      completeBy: 1487730600000,
      completed: false,
    },
    {
      description: "Walk dog",
      completeBy: 1487730600000,
      completed: false,
    },
  ]);
  return (
    <div className={classes.taskListContainer}>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} />
        ))}
      </div>
      <TaskInput />
    </div>
  );
};

export default TaskList;
