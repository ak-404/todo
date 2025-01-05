# To-Do App Backend

This is the backend service for the To-Do Application. It provides RESTful APIs to manage tasks and includes JWT-based authentication for secure access.

## Features

- User registration and login with hashed passwords.
- JWT-based authentication for API endpoints.
- Create, read, update, and delete tasks.
- MongoDB as the database.

## Technologies Used

- **Node.js** with **Express.js** for server-side development.
- **MongoDB** with **Mongoose** for the database.
- **JWT** for authentication.

---

## Project Setup

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance running locally or on the cloud.
- `.env` file with the following variables:
    ```bash
    PORT=5000
    MONGO_URI=<your-mongodb-connection-string>
    JWT_SECRET=<your-jwt-secret-key>
    ```

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ak-404/todo.git
    cd todo-backend
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your `.env` file as shown above.

4. Start the server:

    ```bash
    npm start
    ```

    The server will run on `http://localhost:5000`.

## API Endpoints

### Authentication Routes

#### Register User

- **POST** `/api/auth/register`
- **Request Body**:

    ```json
    {
      "name": "xyz",
      "email": "user@example.com",
      "password": "password123"
    }
    ```

- **Response**:

    ```json
    {
      "message": "User registered"
    }
    ```

#### Login User

- **POST** `/api/auth/login`
- **Request Body**:

    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```

- **Response**:

    ```json
    {
      "user": {
        "id": "userId",
        "email": "user@example.com"
      },
      "token": "jwt_token"
    }
    ```

### Task Management Routes

#### Get All Tasks

- **GET** `/api/tasks`
- **Headers**: `Authorization: Bearer <token>`
- **Response**:

    ```json
    [
      {
        "_id": "taskId",
        "title": "Task Title",
        "description": "Task Description",
        "status": "pending"
      }
    ]
    ```

#### Get Task By ID

- **GET** `/api/tasks/:id`
- **Headers**: `Authorization: Bearer <token>`
- **Response**:

    ```json
    {
      "_id": "taskId",
      "title": "Task Title",
      "description": "Task Description",
      "status": "pending"
    }
    ```

#### Create Task

- **POST** `/api/tasks`
- **Headers**: `Authorization: Bearer <token>`
- **Request Body**:

    ```json
    {
      "title": "New Task",
      "description": "Task Details"
    }
    ```

- **Response**:

    ```json
    {
      "message": "Task created successfully",
      "task": {
        "_id": "taskId",
        "title": "New Task",
        "description": "Task Details",
        "status": "pending"
      }
    }
    ```

#### Update Task

- **PUT** `/api/tasks/:id`
- **Headers**: `Authorization: Bearer <token>`
- **Request Body**:

    ```json
    {
      "status": "in-progress"
    }
    ```

- **Response**:

    ```json
    {
      "message": "Task updated successfully",
      "task": {
        "_id": "taskId",
        "title": "Task Title",
        "description": "Task Description",
        "status": "in-progress"
      }
    }
    ```

#### Delete Task

- **DELETE** `/api/tasks/:id`
- **Headers**: `Authorization: Bearer <token>`
- **Response**:

    ```json
    {
      "message": "Task deleted successfully"
    }
    ```
