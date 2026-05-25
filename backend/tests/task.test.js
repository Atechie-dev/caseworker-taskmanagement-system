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

});


afterAll(async () => {
  await mongoose.connection.close();
});