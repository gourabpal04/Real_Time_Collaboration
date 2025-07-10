#!/bin/bash

# CollabBoard Production Deployment Script
set -e

echo "🚀 Starting CollabBoard deployment..."

# Check if required environment variables are set
if [ -z "$DEPLOYMENT_URL" ]; then
    echo "❌ Error: DEPLOYMENT_URL environment variable is not set"
    exit 1
fi

if [ -z "$JWT_SECRET" ]; then
    echo "❌ Error: JWT_SECRET environment variable is not set"
    exit 1
fi

# Create necessary directories
mkdir -p logs
mkdir -p ssl

# Build and start services
echo "🔧 Building and starting services..."
docker-compose -f deployment/docker-compose.prod.yml down
docker-compose -f deployment/docker-compose.prod.yml build --no-cache
docker-compose -f deployment/docker-compose.prod.yml up -d

# Health check
echo "🏥 Performing health check..."
sleep 30

# Check backend health
if curl -f http://localhost/api/health; then
    echo "✅ Backend health check passed"
else
    echo "❌ Backend health check failed"
    exit 1
fi

# Check frontend health
if curl -f http://localhost/health; then
    echo "✅ Frontend health check passed"
else
    echo "❌ Frontend health check failed"
    exit 1
fi

echo "✅ CollabBoard deployment completed successfully!"
echo "📱 Application is available at: $DEPLOYMENT_URL"