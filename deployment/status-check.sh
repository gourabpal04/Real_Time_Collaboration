#!/bin/bash

# CollabBoard Status Check Script
set -e

echo "🔍 Checking CollabBoard service status..."

# Function to check service health
check_service() {
    local service_name=$1
    local health_url=$2
    
    echo -n "Checking $service_name... "
    
    if curl -f "$health_url" > /dev/null 2>&1; then
        echo "✅ Healthy"
        return 0
    else
        echo "❌ Unhealthy"
        return 1
    fi
}

# Check if running in Docker
if docker ps --format "table {{.Names}}" | grep -q "collabboard"; then
    echo "📦 Docker services detected"
    
    # Check Docker services
    echo "🐳 Docker container status:"
    docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" | grep collabboard
    
    # Health checks
    check_service "Backend API" "http://localhost:5000/api/health"
    check_service "Frontend" "http://localhost:3000/health"
    check_service "MongoDB" "http://localhost:27017" || echo "ℹ️  MongoDB doesn't have HTTP endpoint"
    
else
    echo "💻 Development mode detected"
    
    # Check development services
    check_service "Backend API" "http://localhost:5000/api/health"
    check_service "Frontend" "http://localhost:5173"
    
    # Check MongoDB
    if pgrep -x "mongod" > /dev/null; then
        echo "✅ MongoDB is running"
    else
        echo "❌ MongoDB is not running"
    fi
fi

echo "📊 Service status check completed"