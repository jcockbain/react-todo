const task = require("../models/task");

class TaskRepository {
  constructor(model) {
    this.model = model;
  }

  // create a new task
  create(description, completeBy, completed) {
    const newTask = { description, completeBy, completed };
    const task = new this.model(newTask);

    return task.save();
  }

  // return all tasks
  findAll() {
    return this.model.find();
  }

  //find task by the id
  findById(id) {
    return this.model.findById(id);
  }

  // delete task
  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  //update task
  updateById(id, object) {
    const query = { _id: id };
    return this.model.findOneAndUpdate(query, {
      $set: {
        description: object.description,
        completeBy: object.completeBy,
        completed: object.completed,
      },
    });
  }
}

module.exports = new TaskRepository(task);
