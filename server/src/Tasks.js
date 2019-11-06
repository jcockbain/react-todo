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
    return this.tasks.find(task => id === task.id);
  }

  deleteTask(id) {
    let todoFound;
    let itemIndex;
    this.tasks.map((todo, index) => {
      if (todo.id === id) {
        todoFound = todo;
        itemIndex = index;
      }
    });
    if (todoFound) {
      this.tasks.splice(id, itemIndex);
    }
  }

  updateTask(id, taskInfo) {
    let todoFound;
    let itemIndex;
    this.tasks.map((todo, index) => {
      if (todo.id === id) {
        todoFound = todo;
        itemIndex = index;
      }
    });
    if (todoFound) {
      const currentTask = this.getTask(id);
      this.tasks.splice(itemIndex, 1, { ...currentTask, ...taskInfo });
    }
  }
}

module.exports = Tasks;
