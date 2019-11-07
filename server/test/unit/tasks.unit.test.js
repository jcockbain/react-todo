const Tasks = require("../../src/Tasks");

const { expect } = require("../setup/chai.setup");

const task1 = {
  id: 1,
  description: "Complete Homework",
  completeBy: 1487730600000,
  completed: false,
};

const additionalTask = {
  description: "Walk dog",
  completeBy: 1487730600000,
  completed: false,
};

const initialTaskList = [task1];

describe("Tasks.js", () => {
  let tasks;
  tasks = new Tasks(initialTaskList);

  describe("getTasks()", () => {
    it("should return initial task list", () => {
      const result = tasks.getTasks();
      expect(result).to.deep.equal(initialTaskList);
    });
  });

  describe("addTask(taskInfo)", () => {
    it("should add the task", () => {
      const wantTaskList = initialTaskList.concat({ ...additionalTask, id: 2 });
      tasks.addTask(additionalTask);
      const gotTaskList = tasks.getTasks();
      expect(gotTaskList).to.deep.equal(wantTaskList);
    });
  });

  describe("getTask(id)", () => {
    it("should get the correct task", () => {
      const secondTask = tasks.getTask(2);
      expect(secondTask).to.deep.equal({ ...additionalTask, id: 2 });
    });
  });

  describe("updateTask(id, taskInfo)", () => {
    it("should update a task", () => {
      const taskUpdate = { description: "Cook pasta" };
      tasks.updateTask(2, taskUpdate);
      const secondTask = tasks.getTask(2);
      expect(secondTask).to.deep.equal({
        ...additionalTask,
        ...taskUpdate,
        id: 2,
      });
    });
  });

  describe("deleteTask(id)", () => {
    it("should delete the additional task", () => {
      tasks.deleteTask(2);
      const taskList = tasks.getTasks();
      expect(taskList).to.deep.equal([{ ...task1, id: 1 }]);
    });
  });
});
