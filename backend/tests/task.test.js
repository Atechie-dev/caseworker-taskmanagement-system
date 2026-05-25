const request = require("supertest");
const mongoose = require("mongoose");

require("dotenv").config();

const app = require("../app");
const connectDB = require("../config/db");


beforeAll(async () => {
  await connectDB();
});


describe("Task API", () => {

  it("should create a new task", async () => {

    const response = await request(app)
      .post("/api/tasks")
      .send({
        title: "Write tests",
        dueDate: "01-06-2026"
      });

    expect(response.status).toBe(201);

  });

  it("should get all tasks", async () => {

    const response = await request(app)
      .get("/api/tasks");
  
    expect(response.status).toBe(200);
  
  });

    it("should fail if title is missing", async () => {

    const response = await request(app)
        .post("/api/tasks")
        .send({
        dueDate: "2026-06-01"
        });

    expect(response.status).toBe(500);

    });

});


afterAll(async () => {
  await mongoose.connection.close();
});

