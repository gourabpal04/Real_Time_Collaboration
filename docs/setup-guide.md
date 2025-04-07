```markdown
# 🛠️ Real-Time Collaboration App – Setup Guide

Welcome to the setup documentation for the **Real-Time Collaboration App**.

📦 GitHub Repo: [https://github.com/gourabpal04/Real_Time_Collaboration](https://github.com/gourabpal04/Real_Time_Collaboration)  
📧 Email: 04gourabpal@gmail.com  
🔗 LinkedIn: [Gourab Pal](https://www.linkedin.com/in/gourab-pal-828078248/)

---

## 📚 Table of Contents

- [🧱 Project Structure](#project-structure)
- [⚙️ Environment Variables](#environment-variables)
- [🚀 Start the App](#start-the-app)
- [🧪 Run Tests](#run-tests)
- [🐳 Docker Deployment](#docker-deployment)
- [📊 Code Coverage](#code-coverage)
- [💬 WebSocket Features](#websocket-features)
- [🛠️ Troubleshooting](#troubleshooting)
- [📬 Contact](#contact)

---

## 🧱 Project Structure

```
Real_Time_Collaboration/
├── backend/
│   ├── server.js
│   ├── ...
│
├── frontend/
│   ├── src/
│   ├── ...
│
├── tests/
│   ├── e2e/
│   ├── coverage/
│   └── ...
│
├── deployment/
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── ci-config.yml
│
├── docs/
│   └── setup-guide.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in both `backend/` and `frontend/` with appropriate variables.

Example for `backend/.env`:

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/realtime_db
JWT_SECRET=your_jwt_secret
```

Example for `frontend/.env`:

```
REACT_APP_BACKEND_URL=http://localhost:5000
```

---

## 🚀 Start the App

Start backend & frontend separately:

```
# Backend
cd backend
npm install
npm run dev
```

```
# Frontend
cd frontend
npm install
npm start
```

---

## 🧪 Run Tests

Run Cypress E2E tests:

```
cd frontend/tests
npx cypress open
```

For headless mode with code coverage:

```
npx cypress run
```

---

## 🐳 Docker Deployment

To run everything using Docker:

```
docker-compose up --build
```

To stop:

```
docker-compose down
```

---

## 📊 Code Coverage

After running tests with coverage, results are saved in:

```
frontend/tests/coverage/lcov-report/index.html
```

Open in a browser to view.

---

## 💬 WebSocket Features

- Real-time collaborative editing
- Live chat messaging
- User presence indicators (online/editing)

---

## 🛠️ Troubleshooting

> ✅ **Port in use?**  
Stop all running apps or change port in `.env`.

> ❌ **MongoDB not connected?**  
Ensure Mongo is running locally or check `MONGO_URI`.

> 🧪 **Tests failing?**  
Make sure backend server is up before running Cypress tests.

---

## 📬 Contact

- 📧 Email: 04gourabpal@gmail.com  
- 🔗 LinkedIn: [Gourab Pal](https://www.linkedin.com/in/gourab-pal-828078248/)  
- 🧑‍💻 GitHub: [gourabpal04](https://github.com/gourabpal04)
```
