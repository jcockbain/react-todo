import React, { useState, useEffect } from "react";
import Task from "../../elements/task";

import { origin } from "../../config";

import classes from "./task-panel.module.css";
import TaskForm from "../task-form";
import axios from "axios";

const TaskPanel = () => {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);

  useEffect(() => {
    const fetchData = () => {
      getTasks();
    };
    fetchData();
  }, []);

  // const postTask = taskID => {
  //   axios
  //     .post(`${origin}/api/v1/tasks/${taskID}`)
  //     .then(getTasks())
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // const putTask = (taskID, taskInfo) => {
  //   axios
  //     .put(`${origin}/api/v1/tasks/${taskID}`)
  //     .then(getTasks())
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  const getTasks = () => {
    axios
      .get(`${origin}/api/v1/tasks`)
      .then(response => {
        setTasks(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteTask = taskID => {
    axios
      .delete(`${origin}/api/v1/tasks/${taskID}`)
      .then(getTasks())
      .catch(err => {
        console.log(err);
      });
  };

  const addTask = taskInfo => {
    axios.post(`${origin}/api/v1/tasks`, taskInfo).catch(err => {
      console.log(err);
    });
  };

  return (
    <div className={classes.taskListContainer}>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} deleteTask={deleteTask} />
        ))}
      </div>
      <div className={classes.addTaskButton}>
        <button>Add task</button>
      </div>
      <TaskForm submitTask={addTask} />
    </div>
  );
};

export default TaskPanel;
