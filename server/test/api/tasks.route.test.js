const server = require("../setup/server.setup");

const { expect } = require("../setup/chai.setup");

const { dummyDb } = require("../../src/db/db");

describe("GET /api/v1/tasks", () => {
  it("returns 200 and the correct tasks list", async () => {
    const res = await server()
      .get("/api/v1/tasks");
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal(dummyDb);
  });
});