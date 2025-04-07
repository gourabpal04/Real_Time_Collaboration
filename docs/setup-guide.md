```markdown
# 🛠️ Real-Time Collaboration App – Setup Guide

Welcome to the complete setup documentation for the **Real-Time Collaboration App**.

---

## 📚 Table of Contents

- [🧱 Project Structure](#project-structure)
- [⚙️ Environment Variables](#environment-variables)
- [🚀 Running the App Locally](#running-the-app-locally)
- [🧪 Running Cypress E2E Tests](#running-cypress-e2e-tests)
- [🐳 Docker](#docker)
- [📄 Code Coverage](#code-coverage)
- [📡 WebSocket Communication](#websocket-communication)
- [🧼 Troubleshooting](#troubleshooting)
- [📬 Contact](#contact)

---

## 🧱 Project Structure

```bash
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
│   └── e2e/
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

Create a `.env` file in both the `backend/` and `frontend/` folders.

### Backend `.env`
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/collab
JWT_SECRET=your_jwt_secret
```

### Frontend `.env`
```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

---

## 🚀 Running the App Locally

### Prerequisites:
- Node.js ≥ 16
- MongoDB running locally

### Step-by-Step:

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd ../frontend
npm install
npm start
```

---

## 🧪 Running Cypress E2E Tests

```bash
cd frontend/tests
npx cypress open
```

Or for headless:
```bash
npx cypress run
```

Ensure both backend and frontend servers are running before testing.

---

## 🐳 Docker

To spin everything up in Docker:

```bash
docker-compose up --build
```

### Docker Compose services:
- **backend** → Node.js + Express + Mongo
- **frontend** → React app
- **mongo** → MongoDB container

---

## 📄 Code Coverage

To generate and view frontend coverage:
```bash
cd frontend
npm run test:coverage
```

Results appear in:
```
frontend/tests/coverage/lcov-report/index.html
```

Open in browser to view.

---

## 📡 WebSocket Communication

We use **Socket.IO** for:
- Real-time document editing
- Chat messaging
- Presence detection

All sockets are handled inside:
```bash
backend/sockets/
```

---

## 🧼 Troubleshooting

- ❌ **CORS issues**  
  ✅ Make sure CORS is properly enabled on backend.

- ❌ **MongoDB connection fails**  
  ✅ Check if MongoDB is running locally or update `MONGO_URI`.

- ❌ **Frontend cannot reach backend**  
  ✅ Verify `.env` file and proxy settings.

---

## 📬 Contact

Maintained by **Gourab Pal**  
📧 [LinkedIn](https://www.linkedin.com/in/gourab-pal-828078248/)
```

---

Let me know if you want this setup-guide exported to a downloadable `.md` file or included in your README as a section!
