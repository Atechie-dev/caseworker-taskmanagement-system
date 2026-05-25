const Task = require("../models/Task");
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

    expect(response.status).toBe(400);

    });

    it("should get a single task", async () => {

        const task = await Task.create({
          title: "Test Task",
          dueDate: "2026-06-01"
        });
      
        const response = await request(app)
          .get(`/api/tasks/${task._id}`);
      
        expect(response.status).toBe(200);
      
      });

        it("should update a task", async () => {
    
            const task = await Task.create({
            title: "Task to Update",
            dueDate: "2026-06-01"
            });
        
            const response = await request(app)
            .put(`/api/tasks/${task._id}`)
            .send({ status: "In Progress" });
        
            expect(response.status).toBe(200);

    });

    it("should delete a task", async () => {

        const task = await Task.create({
          title: "Delete Me",
          dueDate: "2026-06-01"
        });
      
        const response = await request(app)
          .delete(`/api/tasks/${task._id}`);
      
        expect(response.status).toBe(200);
      
      });

})

afterAll(async () => {
  await mongoose.connection.close();
});

