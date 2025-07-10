#!/bin/bash

# CollabBoard Development Start Script
set -e

echo "🚀 Starting CollabBoard in development mode..."

# Check if MongoDB is running
if ! pgrep -x "mongod" > /dev/null; then
    echo "❌ MongoDB is not running. Please start MongoDB first."
    exit 1
fi

# Start backend
echo "🔧 Starting backend server..."
cd backend
npm install
npm run dev &
BACKEND_PID=$!

# Start frontend
echo "🎨 Starting frontend server..."
cd ../frontend
npm install
npm run dev &
FRONTEND_PID=$!

# Wait for services to start
sleep 5

echo "✅ CollabBoard development servers started!"
echo "🔗 Backend: http://localhost:5000"
echo "🎨 Frontend: http://localhost:5173"
echo "📄 API Documentation: http://localhost:5000/api/health"

# Keep the script running
wait $BACKEND_PID $FRONTEND_PID