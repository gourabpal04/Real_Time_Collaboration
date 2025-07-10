#!/bin/bash

# Production startup script for CollabBoard
set -e

echo "🚀 Starting CollabBoard in production mode..."

# Load environment variables
if [ -f .env.production ]; then
    export $(cat .env.production | sed 's/#.*//g' | xargs)
fi

# Validate required environment variables
required_vars=("MONGO_URI" "JWT_SECRET" "FRONTEND_URL")
for var in "${required_vars[@]}"; do
    if [ -z "${!var}" ]; then
        echo "❌ Error: $var environment variable is not set"
        exit 1
    fi
done

# Start services using Docker Compose
echo "🔧 Starting production services..."
docker-compose -f deployment/docker-compose.prod.yml up -d

# Wait for services to be ready
echo "⏳ Waiting for services to initialize..."
sleep 30

# Perform health checks
echo "🏥 Performing health checks..."

# Check MongoDB
if docker exec collabboard-mongo mongo --eval "db.runCommand({ ping: 1 })" > /dev/null 2>&1; then
    echo "✅ MongoDB health check passed"
else
    echo "❌ MongoDB health check failed"
    exit 1
fi

# Check backend
if curl -f http://localhost:5000/api/health > /dev/null 2>&1; then
    echo "✅ Backend health check passed"
else
    echo "❌ Backend health check failed"
    exit 1
fi

# Check frontend
if curl -f http://localhost:3000/health > /dev/null 2>&1; then
    echo "✅ Frontend health check passed"
else
    echo "❌ Frontend health check failed"
    exit 1
fi

echo "✅ CollabBoard production deployment successful!"
echo "🌐 Application is available at: ${DEPLOYMENT_URL:-http://localhost}"
echo "📊 Monitor logs with: docker-compose -f deployment/docker-compose.prod.yml logs -f"