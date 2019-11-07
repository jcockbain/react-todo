class Tasks {
  constructor(taskList) {
    this.tasks = taskList;
  }

  resetTasks() {
    this.tasks = [];
  }

  getTasks() {
    return this.tasks;
  }

  addTask(taskInfo) {
    this.tasks.push({ ...taskInfo, id: this.tasks.length + 1 });
  }

  getTask(id) {
    const task = this.tasks.find(task => id === task.id);
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
      this.tasks.splice(id, itemIndex);
    } else {
      throw new Error(`Task with id ${id} not found`);
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
      throw new Error(`Task with id ${id} not found`);
    }
  }
}

module.exports = Tasks;
