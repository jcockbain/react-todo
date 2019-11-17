const ResponseError = require('./utils/ResponseError');

class Tasks {
  constructor(taskList) {
    this.tasks = taskList;
    this.taskNumber = taskList.length;
  }

  resetTasks() {
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(taskInfo) {
    this.taskNumber += 1;
    this.tasks.push({ ...taskInfo, id: this.taskNumber });
  }

  getTask(id) {
    const task = this.tasks.find((selectedTask) => id === selectedTask.id);
    if (!task) {
      throw new ResponseError(404, `task ${id} not found`);
    }
    return task;
  }

  deleteTask(id) {
    let todoFound;
    let itemIndex;
    this.tasks.map((task, index) => {
      if (task.id === id) {
        todoFound = task;
        itemIndex = index;
      }
    });
    if (todoFound) {
      this.tasks.splice(itemIndex, 1);
    } else {
      throw new ResponseError(404, `task ${id} not found`);
    }
  }

  updateTask(id, taskInfo) {
    let taskFound;
    let itemIndex;
    this.tasks.map((task, index) => {
      if (task.id === id) {
        taskFound = task;
        itemIndex = index;
      }
    });
    if (taskFound) {
      this.tasks.splice(itemIndex, 1, { ...taskFound, ...taskInfo });
    } else {
      throw new ResponseError(404, `task ${id} not found`);
    }
  }
}

module.exports = Tasks;
