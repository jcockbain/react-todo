const server = require("../setup/server.setup");

const { expect } = require("../setup/chai.setup");
describe("GET /api/v1/tasks", () => {
  it("returns 200", async () => {
    const res = await server()
      .get("/api/v1/tasks");
    expect(res.status).to.equal(200);
  });
});