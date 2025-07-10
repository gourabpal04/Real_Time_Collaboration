# 🚀 CollabBoard Production Deployment Guide

This guide provides comprehensive instructions for deploying CollabBoard in production with proper CI/CD automation, deployment status tracking, and WebSocket support.

## 📋 Prerequisites

- Docker & Docker Compose installed
- GitHub repository with Actions enabled
- Domain name configured (optional)
- SSL certificates (for HTTPS)

## 🔧 Quick Start

### 1. Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit with your production values
nano .env
```

### 2. Development Mode

```bash
# Start development servers
./scripts/start.sh

# Access the application
# Frontend: http://localhost:5173
# Backend: http://localhost:5000
# API Health: http://localhost:5000/api/health
```

### 3. Production Deployment

```bash
# Deploy to production
./scripts/deploy.sh

# Check deployment status
./deployment/status-check.sh
```

## 🏗️ Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Nginx Proxy   │    │  React Frontend │    │  Node.js Backend│
│   (Port 80/443) │────│   (Port 3000)   │────│   (Port 5000)   │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                                              │
         │              ┌─────────────────┐             │
         └──────────────│   MongoDB       │─────────────┘
                        │  (Port 27017)   │
                        └─────────────────┘
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

The deployment pipeline includes:

1. **Build & Test**: Runs tests for both frontend and backend
2. **Deployment Creation**: Creates GitHub deployment with status tracking
3. **Production Deploy**: Builds and deploys Docker containers
4. **Health Checks**: Verifies all services are healthy
5. **Status Updates**: Updates deployment status (success/failure)

### Environment Variables (GitHub Secrets)

Set these in your GitHub repository settings:

```bash
# Required secrets
DEPLOYMENT_URL=https://your-domain.com
JWT_SECRET=your_super_secret_jwt_key
MONGO_ROOT_USERNAME=admin
MONGO_ROOT_PASSWORD=secure_password

# Optional
GITHUB_TOKEN=ghp_xxxxxxxxxxxx  # Automatically provided by GitHub
```

## 🌐 WebSocket Configuration

### Production WebSocket Setup

The application supports WebSocket communication through:

1. **Socket.IO Server**: Configured with proper CORS and transport options
2. **Nginx Proxy**: Routes WebSocket traffic to backend
3. **Fallback Support**: Polling fallback for environments without WebSocket support

### WebSocket Endpoints

- **Main Socket**: `/socket.io/`
- **Fallback**: `/ws` (polling)
- **Health Check**: `/api/health`

## 📦 Docker Configuration

### Production Services

- **nginx**: Reverse proxy and static file serving
- **backend**: Node.js application server
- **frontend**: React application (built)
- **mongo**: MongoDB database
- **watchtower**: Auto-updates containers

### Service Commands

```bash
# Start all services
docker-compose -f deployment/docker-compose.prod.yml up -d

# View logs
docker-compose -f deployment/docker-compose.prod.yml logs -f

# Stop all services
docker-compose -f deployment/docker-compose.prod.yml down

# Rebuild and restart
docker-compose -f deployment/docker-compose.prod.yml up -d --build
```

## 🔍 Health Checks & Monitoring

### Automated Health Checks

- **Backend**: `/api/health` (JSON response)
- **Frontend**: `/health` (Nginx health endpoint)
- **MongoDB**: Internal connection check
- **WebSocket**: Connection test via Socket.IO

### Status Monitoring

```bash
# Check all services
./deployment/status-check.sh

# Monitor real-time logs
docker-compose -f deployment/docker-compose.prod.yml logs -f

# Individual service logs
docker logs collabboard-backend
docker logs collabboard-frontend
docker logs collabboard-nginx
```

## 🛡️ Security Features

### Production Security

- **CORS Configuration**: Restricts origins in production
- **Security Headers**: X-Frame-Options, X-XSS-Protection, etc.
- **Rate Limiting**: Configurable request limits
- **JWT Authentication**: Secure token-based auth
- **HTTPS Ready**: SSL termination at Nginx

### Environment Isolation

- **Development**: Local MongoDB, hot reload
- **Production**: Docker containers, optimized builds
- **Testing**: Isolated test database

## 📊 Deployment Status Tracking

### GitHub Integration

The deployment pipeline automatically:

1. Creates deployment records in GitHub
2. Updates status during deployment process
3. Links to live environment URL
4. Tracks deployment history
5. Provides rollback capabilities

### Status States

- **pending**: Deployment initiated
- **in_progress**: Currently deploying
- **success**: Deployment completed successfully
- **failure**: Deployment failed
- **error**: Deployment error occurred

## 🔧 Troubleshooting

### Common Issues

1. **WebSocket Connection Failed**
   ```bash
   # Check Nginx WebSocket config
   nginx -t
   
   # Verify backend WebSocket server
   curl -f http://localhost:5000/api/health
   ```

2. **MongoDB Connection Issues**
   ```bash
   # Check MongoDB status
   docker exec collabboard-mongo mongo --eval "db.runCommand({ ping: 1 })"
   
   # View MongoDB logs
   docker logs collabboard-mongo
   ```

3. **Environment Variable Issues**
   ```bash
   # Verify environment variables
   docker exec collabboard-backend env | grep -E "(MONGO|JWT|PORT)"
   ```

### Debug Commands

```bash
# Check service health
./deployment/status-check.sh

# View application logs
docker-compose -f deployment/docker-compose.prod.yml logs --tail=100

# Test WebSocket connection
curl -f http://localhost:5000/socket.io/
```

## 📈 Performance Optimization

### Production Optimizations

- **Gzip Compression**: Enabled for all text-based content
- **Static Asset Caching**: Long-term caching for images, CSS, JS
- **Database Indexing**: Optimized queries for user and document data
- **Connection Pooling**: Efficient database connections
- **CDN Ready**: Static assets can be served from CDN

### Monitoring & Logging

- **Structured Logging**: JSON format for production logs
- **Error Tracking**: Comprehensive error handling
- **Performance Metrics**: Response time monitoring
- **Health Checks**: Automated service monitoring

## 🎯 Next Steps

1. **SSL Configuration**: Add SSL certificates for HTTPS
2. **CDN Setup**: Configure CDN for static assets
3. **Monitoring**: Set up application monitoring (Datadog, New Relic)
4. **Backup Strategy**: Implement MongoDB backup automation
5. **Load Balancing**: Scale horizontally with multiple instances

## 🤝 Contributing

For deployment improvements:

1. Fork the repository
2. Create a feature branch
3. Update deployment configurations
4. Test thoroughly
5. Submit a pull request

## 📝 License

MIT © 2025 — Made with 💙 by Gourab Pal

---

**✨ Your CollabBoard deployment is now production-ready with full CI/CD automation and deployment status tracking!**