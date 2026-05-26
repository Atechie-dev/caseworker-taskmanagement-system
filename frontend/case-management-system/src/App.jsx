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


  return (

    <div style={{ padding: "20px" }}>

      <h1>
        Task Management System
      </h1>


      {/* FORM */}
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <br /><br />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
        >

          <option>
            Pending
          </option>

          <option>
            In Progress
          </option>

          <option>
            Completed
          </option>

        </select>

        <br /><br />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Add Task
        </button>

      </form>


      <hr />


      {/* TASK LIST */}
      {tasks.map((task) => (

        <div
          key={task._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
          }}
        >

          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <p>
            Status:
            {" "}
            {task.status}
          </p>

          <p>
            Due:
            {" "}
            {new Date(task.dueDate)
              .toLocaleDateString()}
          </p>

          <button
            onClick={() =>
              deleteTask(task._id)
            }
          >
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default App;