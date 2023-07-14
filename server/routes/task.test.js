const request = require("supertest");
const app = require("../app");

// get all tasks
describe("Test GET /task", () => {
  test("Should respond with 200", async () => {
    const response = await request(app).get("/api/v1/task");
    expect(response.statusCode).toBe(200);
  });
});

// mongoose cast error
describe("Test GET /task/12342", () => {
  test("Should respond with 404", async () => {
    const response = await request(app).get("/api/v1/task/2511");
    expect(response.statusCode).toBe(404);
  });
});

// get a single task
describe("Test GET /task/:id", () => {
  test("Should respond with 404", async () => {
    const response = await request(app).get(
      "/api/v1/task/64a1f300690ff3789c8f16fa"
    );
    expect(response.statusCode).toBe(404);
  });
});

// add a task
describe("Test POST /task", () => {
  test("Should respond with 201 (task created)", async () => {
    const response = await request(app)
      .post("/api/v1/task")
      .send({ description: "some task" });

    expect(response.statusCode).toBe(201);
  });

  test("Should respond with 400 (invalid description)", async () => {
    const response = await request(app)
      .post("/api/v1/task")
      .send({ description: "some" });

    expect(response.statusCode).toBe(400);
  });
});

// delete task
describe("Test DELETE /task/:id", () => {
  test("Should respond with 200", async () => {
    // create a task
    const created = await request(app)
      .post("/api/v1/task")
      .send({ description: "test case task" });

    const response = await request(app).delete(
      `/api/v1/task/${created.body.task._id}`
    );

    expect(response.statusCode).toBe(200);
  });
});

// update task
describe("Test PUT /task/:id", () => {
  test("Should respond with 200", async () => {
    // create a task
    const created = await request(app)
      .post("/api/v1/task")
      .send({ description: "test case task" });

    const response = await request(app)
      .put(`/api/v1/task/${created.body.task._id}`)
      .send({ description: "task changed" });

    expect(response.statusCode).toBe(200);
  });
});
