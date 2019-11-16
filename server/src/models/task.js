//models/Todo.js

const mongoose = require("mongoose");

const { Schema } = mongoose;

// Define schema for todo items
const taskSchema = new Schema({
  description : {
    type: String,
  },
  completeBy: {
    type: Number,
  },
  completed: {
    type: Boolean,
  },
});

const Task = mongoose.model("Todo", taskSchema);

module.exports = Task;
