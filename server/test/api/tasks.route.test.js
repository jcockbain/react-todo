const server = require("../setup/server.setup");

const { expect } = require("../setup/chai.setup");

const task1 = {
  description: "Complete Homework",
  completeBy: 1487730600000,
  completed: false,
};

const task2 = {
  description: "Walk dog",
  completeBy: 1487730600000,
  completed: false,
};

const taskUpdate = {
  description: "cook pasta",
};

describe("/api/v1/tasks", () => {
  before(() => {
    it("resets the task list"),
    async () => {
      const res = await server().post("/api/v1/tasks/reset");
      expect(res.status).to.equal(200);
    };
  });
  after(() => {
    it("resets the task list"),
    async () => {
      const res = await server().post("/api/v1/tasks/reset");
      expect(res.status).to.equal(200);
    };
  });
  describe("POST /tasks", () => {
    it("returns 200 for first task", async () => {
      const res = await server()
        .post("/api/v1/tasks/")
        .send(task1);
      expect(res.status).to.equal(200);
    });
    it("returns 200 for second task", async () => {
      const res = await server()
        .post("/api/v1/tasks/")
        .send(task2);
      expect(res.status).to.equal(200);
    });
  });
  describe("GET /tasks", () => {
    it("returns 200, and the added tasks", async () => {
      const res = await server().get("/api/v1/tasks");
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal([
        { ...task1, id: 1 },
        { ...task2, id: 2 },
      ]);
    });
  });
  describe("GET /tasks/id", () => {
    it("returns 200", async () => {
      const res = await server().get("/api/v1/tasks/1");
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal({ ...task1, id: 1 });
    });
  });
  describe("PUT /tasks/id", () => {
    it("returns 200", async () => {
      const res = await server()
        .put("/api/v1/tasks/1")
        .send(taskUpdate);
      expect(res.status).to.equal(200);
    });
    it("has updated the tasks list correctly", async () => {
      const res = await server().get("/api/v1/tasks/1");
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal({ ...task1, id: 1, ...taskUpdate });
    });
  });
  describe("DELETE /tasks/id", () => {
    it("returns 200", async () => {
      const res = await server().delete("/api/v1/tasks/2");
      expect(res.status).to.equal(200);
    });
    it("has removed the correct element from the taskList", async () => {
      const res = await server().get("/api/v1/tasks");
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal([{ ...task1, id: 1, ...taskUpdate }]);
    });
  });
});
