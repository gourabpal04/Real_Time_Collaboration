Here's the **full content** for `setup-guide.md` that you can directly save as a `.md` file:

```markdown
# ⚙️ Setup Guide - Real-Time Collaboration App

Welcome! Follow this guide to set up the project for development, testing, and containerization on your local machine.

---

## 📁 Project Structure

```
Real_Time_Collaboration/
├── backend/
├── frontend/
├── tests/
├── deployment/
├── docs/
```

---

## 📦 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Docker](https://www.docker.com/) (optional)
- [Git](https://git-scm.com/)

---

## 🛠️ Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/` folder and add:

   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/realtime-collab
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The backend API will be available at `http://localhost:5000`.

---

## 💻 Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend/` folder and add:

   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

4. Start the React development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

---

## 🧪 Running Cypress Tests

1. Go to the test directory:

   ```bash
   cd frontend/tests
   ```

2. Open the Cypress UI:

   ```bash
   npx cypress open
   ```

   Or run tests in headless mode:

   ```bash
   npx cypress run
   ```

3. Cypress uses mock fixtures and intercepts in the `cypress/fixtures/` and `cypress/support/` directories.

---

## 📊 Code Coverage (Optional)

If enabled, after running tests, coverage reports are available under:

```
frontend/tests/coverage/lcov-report/index.html
```

Open in your browser to view the visual report.

---

## 🐳 Docker Setup (Optional)

1. From the root of the project:

   ```bash
   docker-compose up --build
   ```

2. Visit the following in your browser:

   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000/api`

---

## 📄 Documentation

- [API Docs](./api-docs.md)
- [Component Docs](./component-docs.md)

---

✅ You’re all set to contribute and collaborate!
