const server = require("../setup/server.setup");

const { expect } = require("../setup/chai.setup");

const task1 = {
  description: "Complete Homework",
  completeBy: 1487730600000,
  completed: false,
};

const taskUpdate = {
  description: "cook pasta"
};

const additionalTask = {
  description: "Walk dog",
  completeBy: 1487730600000,
  completed: false,
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
    it("returns 200", async () => {
      const res = await server()
        .post("/api/v1/tasks/")
        .send(task1);
      expect(res.status).to.equal(200);
    });
  });
  describe("GET /tasks", () => {
    it("returns 200, and the added task", async () => {
      const res = await server().get("/api/v1/tasks");
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal([{ ...task1, id: 1 }]);
    });
  });
  describe("GET /tasks/id", () => {
    it("returns 200", async () => {
      const res = await server().get("/api/v1/tasks?id=1").send(taskUpdate);
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal([{ ...task1, id: 1 }]);
    });
  });
});
