import"./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Pending",
    dueDate: ""
  });

  const API_URL =
    "http://localhost:5050/api/tasks";


  // FETCH TASKS
  const fetchTasks = async () => {

    try {

      const response =
        await axios.get(API_URL);

      setTasks(response.data);

    } catch (error) {

      console.error(error);
    }
  };


  useEffect(() => {
    fetchTasks();
  }, []);


  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  // CREATE TASK
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        API_URL,
        formData
      );

      fetchTasks();

      setFormData({
        title: "",
        description: "",
        status: "Pending",
        dueDate: ""
      });

    } catch (error) {

      console.error(error);
    }
  };


  // DELETE TASK
  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `${API_URL}/${id}`
      );

      fetchTasks();

    } catch (error) {

      console.error(error);
    }
  };

  // UPDATE TASK STATUS
    const updateStatus = async (id) => {

      try {

        await axios.put(
          `${API_URL}/${id}`,
          {
            status: "Completed"
          }
        );

        fetchTasks();

      } catch (error) {

        console.error(error);
      }
    };

    return (

      <main className="app-container">
    
        <h1 className="app-title">
          Task Management System
        </h1>
    
        <form
          className="task-form"
          onSubmit={handleSubmit}
        >
    
          <div className="form-group">
    
            <label htmlFor="title">
              Title
            </label>
    
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Enter task title"
              value={formData.title}
              onChange={handleChange}
              required
            />
    
          </div>
    
    
          <div className="form-group">
    
            <label htmlFor="description">
              Description
            </label>
    
            <textarea
              id="description"
              name="description"
              placeholder="Enter task description"
              value={formData.description}
              onChange={handleChange}
            />
    
          </div>
    
    
          <div className="form-group">
    
            <label htmlFor="status">
              Status
            </label>
    
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
    
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
    
            </select>
    
          </div>
    
    
          <div className="form-group">
    
            <label htmlFor="dueDate">
              Due Date
            </label>
    
            <input
              id="dueDate"
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
            />
    
          </div>
    
    
          <button
            type="submit"
            className="add-button"
          >
            Add Task
          </button>
    
        </form>
    
    
        {tasks.length === 0 ? (
    
          <p className="empty-message">
            No tasks available.
          </p>
    
        ) : (
    
          tasks.map((task) => (
    
            <section
              key={task._id}
              className="task-card"
              aria-label={`Task ${task.title}`}
            >
    
              <h2>{task.title}</h2>
    
              <p>{task.description}</p>
    
              <p
                className={`task-status ${
                  task.status === "Completed"
                    ? "completed"
                    : task.status === "In Progress"
                    ? "in-progress"
                    : "pending"
                }`}
              >
                Status: {task.status}
              </p>
    
              <p>
                Due:
                {" "}
                {new Date(task.dueDate)
                  .toLocaleDateString()}
              </p>
    
    
              {task.status !== "Completed" && (
    
                <button
                  className="complete-button"
                  onClick={() =>
                    updateStatus(task._id)
                  }
                >
                  Mark Task Completed
                </button>
    
              )}
    
    
              <button
                className="delete-button"
                onClick={() =>
                  deleteTask(task._id)
                }
              >
                Delete Task
              </button>
    
            </section>
    
          ))
    
        )}
    
      </main>
    );
}

export default App;