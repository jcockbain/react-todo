import React, { useState, useEffect } from "react";
import Task from "../../elements/task";

import ApiRequests from "../../utils/apiRequests";
import { origin } from "../../config";

import classes from "./task-panel.module.css";
import TaskForm from "../task-form";
import axios from "axios";

const TaskPanel = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${origin}/api/v1/tasks`)
        .then(response => {
          setTasks(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

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
