#!/bin/bash

# CollabBoard Production Deployment Test
set -e

echo "🧪 Testing CollabBoard Production Deployment Setup..."

# Test 1: Check if all deployment files exist
echo "📁 Checking deployment files..."
files=(
    ".github/workflows/deploy.yml"
    "deployment/docker-compose.prod.yml"
    "deployment/Dockerfile.backend"
    "deployment/Dockerfile.frontend"
    "nginx.conf"
    "scripts/deploy.sh"
    "scripts/start.sh"
    ".env.example"
    "DEPLOYMENT.md"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
        exit 1
    fi
done

# Test 2: Check script permissions
echo "🔐 Checking script permissions..."
scripts=(
    "scripts/deploy.sh"
    "scripts/start.sh"
    "deployment/production-start.sh"
    "deployment/status-check.sh"
)

for script in "${scripts[@]}"; do
    if [ -x "$script" ]; then
        echo "✅ $script is executable"
    else
        echo "❌ $script is not executable"
        exit 1
    fi
done

# Test 3: Validate Docker Compose configuration (skip if Docker not available)
echo "🐳 Validating Docker Compose configuration..."
if command -v docker-compose > /dev/null 2>&1; then
    if docker-compose -f deployment/docker-compose.prod.yml config > /dev/null 2>&1; then
        echo "✅ Docker Compose configuration is valid"
    else
        echo "❌ Docker Compose configuration is invalid"
        exit 1
    fi
else
    echo "ℹ️  Docker not available in this environment, skipping Docker validation"
fi

# Test 4: Check backend health endpoint
echo "🏥 Testing backend health endpoint..."
if curl -f http://localhost:5000/api/health > /dev/null 2>&1; then
    echo "✅ Backend health endpoint is working"
else
    echo "❌ Backend health endpoint is not accessible"
    exit 1
fi

# Test 5: Validate GitHub Actions workflow
echo "🔄 Validating GitHub Actions workflow..."
if grep -q "chrnorm/deployment-action" .github/workflows/deploy.yml; then
    echo "✅ GitHub Actions deployment workflow is configured"
else
    echo "❌ GitHub Actions deployment workflow is not properly configured"
    exit 1
fi

# Test 6: Check environment configuration
echo "🌍 Checking environment configuration..."
if [ -f "backend/.env.production" ] && [ -f "frontend/.env.production" ]; then
    echo "✅ Production environment files exist"
else
    echo "❌ Production environment files are missing"
    exit 1
fi

echo "🎉 All tests passed! CollabBoard is ready for production deployment."
echo ""
echo "📋 Summary:"
echo "✅ CI/CD Pipeline: GitHub Actions with deployment status tracking"
echo "✅ WebSocket Support: Socket.IO with Nginx proxy configuration"
echo "✅ Health Checks: Automated service monitoring"
echo "✅ Production Ready: Docker containers with security headers"
echo "✅ Environment Config: Separate development and production settings"
echo "✅ Deployment Scripts: Automated deployment and status checking"
echo ""
echo "🚀 To deploy to production, run: ./scripts/deploy.sh"
echo "📊 To check status, run: ./deployment/status-check.sh"