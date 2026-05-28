# Caseworker Task Management System

A new system for caseworkers to efficiently manage their tasks.
The application allows users to create, read, update and delete tasks through a RESTful API and frontend interface.

---

## Features

- Accessibility-aware user interface
- Full CRUD functionality

### Backend API

- Create tasks
- Retrieve all tasks
- Retrieve a single task by ID
- Update task status/details
- Delete tasks
- MongoDB database integration
- Validation and error handling
- Automated API testing using Jest and Supertest

## API Endpoints

### GET /api/tasks

Retrieve all tasks.

---

### GET /api/tasks/:id

Retrieve a single task by ID.

---

### POST /api/tasks

Create a new task.

#### Example Request Body

```json
{
  "title": "Complete report",
  "description": "Finish monthly report",
  "status": "Pending",
  "dueDate": "2026-04-03"
}
```

---

### PUT /api/tasks/:id

Update a task.

---

### DELETE /api/tasks/:id

Delete a task.

## Validation & Error Handling

The API includes:

- Required field validation
- Status validation using enums
- Proper HTTP status codes
- Error handling using try/catch blocks

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Frontend

- React.js
- Vite
- Axios

### Frontend Setup

Navigate to the frontend application:

```bash
cd frontend/task-management-system
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

### Testing

- Backend API integration testing
- Frontend component testing

## Running Tests

Run backend tests:

```on the terminal
npm test
```

Tests were implemented using:

- Jest
- Supertest
- React Testing Library
- Vitest

### Version Control

- Git
- GitHub

---

## Project Structure

```on the terminal
Case-Management/
|
|--- backend/
|   |-- config/
|   |-- controllers/
|   |-- models/
|   |-- routes/
|   |-- tests/
|   |-- app.js
|   |-- server.js
|   |-- .env
|
|-- frontend/
|
|-- README.md
```

## Installation & Setup

### 1. Clone Repository

```on the terminal
git clone <repository-url>
```

---

### 2. Navigate to Backend

```on the terminal
cd backend
```

---

### 3. Install Dependencies

```on the terminal
npm install
```

---

### 4. Create Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5050

MONGO_URI=your_mongodb_connection_string
```

---

### 5. Start Backend Server

```on the terminal
npm run dev
```

Server runs on:

```txt
http://localhost:5050
```

## Repository

GitHub Repository:

https://github.com/Atechie-dev/caseworker-taskmanagement-system

## Future Improvements

- User authentication
- Role-based access control
- Search/filter functionality
- CI/CD pipeline

## Alternative Implementation Approach

Although this solution was implemented using React, Node.js, Express, and MongoDB, a similar application could also be developed using Microsoft Power Platform technologies such as:

- Power Apps
- Dataverse
- Power Automate

This could provide a low-code alternative for HMCTS since it is already operating within the Microsoft ecosystem.
