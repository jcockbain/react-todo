import React, { useState, useEffect } from "react";
import Task from "../../elements/task";

import classes from "./task-panel.module.css";
import TaskForm from "../task-form";

const TaskPanel = () => {
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
    {
      description: "Walk dog",
      completeBy: 1487730600000,
      completed: false,
    },
    {
      description: "Walk dog",
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
      <div className={classes.addTaskButton}>
        <button>Add task</button>
      </div>
      <TaskForm />
    </div>
  );
};

export default TaskPanel;
