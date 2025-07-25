# Todo Application

A full-stack todo application built with React, Node.js, Express, and MySQL.

## Features

- Create new todo tasks with title and description
- View the 5 most recent tasks
- Mark tasks as completed (removes them from view)
- Responsive design with Tailwind CSS
- RESTful API
- Unit and integration tests
- Dockerized deployment

## Tech Stack

**Frontend:**
- React 18+
- Tailwind CSS
- Axios for API calls
- Jest & React Testing Library

**Backend:**
- Node.js & Express
- MySQL database
- Jest & Supertest for testing

**Infrastructure:**
- Docker & Docker Compose

## Prerequisites

- Docker and Docker Compose (recommended for easiest setup)
- Node.js and npm (for manual/local run)
- Git

---

## Quick Start (Recommended: Docker Compose)

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Todo-app
   ```

2. **Build and start all services:**
   ```bash
   docker-compose up --build
   ```
   - This will start the MySQL database, backend, and frontend.
   - The frontend will be available at [http://localhost:5173](http://localhost:5173)
   - The backend API will be available at [http://localhost:5000/api/tasks](http://localhost:5000/api/tasks)

3. **Stop all services:**
   Press `Ctrl+C` in the terminal, then run:
   ```bash
   docker-compose down
   ```

---

## Manual Setup (Local Development)

### 1. **Start MySQL**
- You can use Docker Compose just for the database:
  ```bash
  docker-compose up db
  ```
- Or use your own local MySQL instance. Make sure the `todo_db` database exists (see `db/init.sql`).

### 2. **Backend**
```bash
cd backend
npm install
npm run dev
```
- The backend will run on [http://localhost:5000](http://localhost:5000)
- Make sure your `backend/db.js` is configured to connect to your MySQL instance (host, user, password, database).

### 3. **Frontend**
```bash
cd frontend
npm install
npm run dev
```
- The frontend will run on [http://localhost:5173](http://localhost:5173)

---

## Running Tests

### **Frontend Tests**
```bash
cd frontend
npm test
```

### **Backend Tests**
```bash
cd backend
npm test
```
- Make sure MySQL is running and accessible before running backend tests.

---

## Project Structure

```
Todo-app/
  backend/      # Express API
  frontend/     # React app
  db/           # SQL init script
  docker-compose.yml
  README.md
```

---

## Environment Variables
- The backend uses `DB_HOST` to determine the database host (set in Docker Compose or `.env`).
- The frontend uses Vite's environment variables for API URL if needed.

---

## License
MIT
