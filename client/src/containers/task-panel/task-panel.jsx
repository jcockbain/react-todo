import React, { useState, useEffect } from "react";
import Task from "../../elements/task";

import { origin } from "../../config";

import classes from "./task-panel.module.css";
import TaskForm from "../../components/task-form";
import axios from "axios";

const TaskPanel = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksUpdated, setTasksUpdated] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      updateTasks();
    };
    fetchData();
  }, [tasksUpdated]);

  const updateTasks = () => {
    axios
      .get(`${origin}/api/v1/tasks`)
      .then(response => {
        if (tasksUpdated) {
          setTasks(response.data);
          setTasksUpdated(false);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const postTask = taskInfo => {
    axios
      .post(`${origin}/api/v1/tasks`, taskInfo)
      .then(() => {
        setTasksUpdated(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const putTask = (taskID, taskInfo) => {
    axios
      .put(`${origin}/api/v1/tasks/${taskID}`, taskInfo)
      .then(() => {
        setTasksUpdated(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteTask = taskID => {
    axios
      .delete(`${origin}/api/v1/tasks/${taskID}`)
      .then(() => {
        setTasksUpdated(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const taskList =
    tasks.length > 0 ? (
      tasks.map((task, index) => (
        <Task
          task={task}
          index={index}
          key={index}
          deleteTask={deleteTask}
          putTask={putTask}
        />
      ))
    ) : (
      <p>Add some tasks!</p>
    );

  return (
    <div className={classes.taskListContainer}>
      <div className="tasks">{taskList}</div>
      <TaskForm submitTask={postTask} />
    </div>
  );
};

export default TaskPanel;
