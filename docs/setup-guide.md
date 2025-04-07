# 🛠️ Real-Time Collaboration App – Setup Guide

Welcome! This guide will help you get the Real-Time Collaboration App up and running, test it, and understand its structure.

---

## 📘 Table of Contents

- [🧱 Project Structure](#project-structure)
- [⚙️ Setup & Environment](#setup--environment)
- [🚀 Start the App](#start-the-app)
- [🧪 Run Tests](#run-tests)
- [🐳 Docker Deployment](#docker-deployment)
- [📊 Code Coverage](#code-coverage)
- [💬 WebSocket Features](#websocket-features)
- [🛠️ Troubleshooting](#troubleshooting)
- [📬 Contact](#contact)

---

## 🧱 Project Structure

Real_Time_Collaboration/  
├── backend/ (Express API + Socket.IO)  
├── frontend/ (React + WebSocket Client)  
├── tests/ (End-to-End Cypress Tests)  
├── deployment/ (Docker & CI config)  
├── docs/ (Documentation)  

---

## ⚙️ Setup & Environment

1. **Install Node.js & MongoDB**
2. Create `.env` files in both `/backend` and `/frontend`:
   - Example for backend:
     ```
     PORT=5000
     MONGO_URI=mongodb://localhost:27017/realtimeapp
     JWT_SECRET=your_secret_key
     ```

3. Install dependencies:
   ```bash
   cd backend && npm install
   cd ../frontend && npm install
🚀 Start the App
Start backend & frontend separately:

bash
Copy
Edit
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm start
🧪 Run Tests
Cypress E2E tests:

bash
Copy
Edit
cd frontend/tests
npx cypress open
For headless testing with coverage:

bash
Copy
Edit
npx cypress run
🐳 Docker Deployment
To run everything using Docker:

bash
Copy
Edit
docker-compose up --build
To stop:

bash
Copy
Edit
docker-compose down
📊 Code Coverage
After running tests with coverage, results are saved in:

swift
Copy
Edit
frontend/tests/coverage/lcov-report/index.html
Open in a browser to view.

💬 WebSocket Features
Real-time text syncing between users

Instant messaging via chat socket

Presence indicators (who’s online/editing)

🛠️ Troubleshooting
Port in use? Stop all running apps or change the port in .env

MongoDB not connected? Make sure it's running locally or update MONGO_URI

Tests fail? Ensure server is running before executing Cypress

📬 Contact
For bugs, feedback, or contributions:
📧 04gourabpal@gmail.com
🔗 GitHub: https://github.com/gourabpal04/Real_Time_Collaboration
