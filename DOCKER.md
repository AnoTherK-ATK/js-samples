# Docker Setup for Google Maps JS Samples

This project includes a complete Docker setup for both production and development environments.

## 🚀 Quick Start

### Production Build
```bash
# Build and run production container
docker-compose up --build

# Or build manually
docker build -t google-maps-js-samples .
docker run -p 8080:80 google-maps-js-samples
```

### Development with Hot Reload
```bash
# Start development environment
docker-compose --profile dev up js-samples-dev

# Or use Node.js development service
docker-compose --profile dev up js-samples-node
```

## 📁 Docker Files

- **`Dockerfile`** - Production multi-stage build with nginx
- **`Dockerfile.dev`** - Development environment with hot reload
- **`docker-compose.yml`** - Orchestration for both environments
- **`nginx.conf`** - Optimized nginx configuration
- **`.dockerignore`** - Build context optimization

## 🏗️ Production Features

### Multi-Stage Build
- **Stage 1**: Node.js build environment
- **Stage 2**: Nginx production server
- Optimized image size with only production assets

### Security
- Non-root user execution
- Security headers (XSS, CSRF, etc.)
- Minimal attack surface with Alpine Linux

### Performance
- Gzip compression
- Static asset caching
- Optimized nginx configuration
- Health checks

### Nginx Configuration
- Client-side routing support
- Static asset optimization
- CORS headers for API calls
- Security headers
- Health check endpoint

## 🛠️ Development Features

### Hot Reload
- File watching with volume mounts
- Automatic rebuilds on changes
- Fast development iteration

### Multiple Options
- **js-samples-dev**: Custom development image
- **js-samples-node**: Direct Node.js image

## 📋 Available Commands

### Production
```bash
# Build production image
docker build -t google-maps-js-samples .

# Run production container
docker run -p 8080:80 google-maps-js-samples

# Using docker-compose
docker-compose up --build
docker-compose up -d  # Detached mode
```

### Development
```bash
# Build development image
docker build -f Dockerfile.dev -t google-maps-js-samples:dev .

# Run development container
docker run -p 3000:8080 -v $(pwd):/app -v /app/node_modules google-maps-js-samples:dev

# Using docker-compose
docker-compose --profile dev up js-samples-dev
docker-compose --profile dev up js-samples-node
```

### Management
```bash
# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up --build --force-recreate

# Clean up
docker-compose down -v
docker system prune -f
```

## 🌐 Access Points

- **Production**: http://localhost:8080
- **Development (js-samples-dev)**: http://localhost:3000
- **Development (js-samples-node)**: http://localhost:3001
- **Health Check**: http://localhost:8080/health

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Set to `production` or `development`
- `CHOKIDAR_USEPOLLING`: Enable file watching in containers

### Ports
- **Production**: 80 (internal) → 8080 (host)
- **Development**: 8080 (internal) → 3000/3001 (host)

### Volumes
- **Development**: Source code mounted for hot reload
- **node_modules**: Anonymous volume for performance

## 🏥 Health Checks

Both production and development containers include health checks:
- **Production**: HTTP check on `/health` endpoint
- **Development**: HTTP check on root endpoint
- **Interval**: 30 seconds
- **Timeout**: 10 seconds
- **Retries**: 3 attempts

## 🔒 Security Features

### Production Container
- Non-root user (nextjs:1001)
- Security headers
- Minimal dependencies
- Alpine Linux base

### Network Security
- Isolated Docker network
- No unnecessary ports exposed
- CORS configuration for API calls

## 📊 Performance Optimizations

### Build Optimizations
- Multi-stage build reduces final image size
- `.dockerignore` excludes unnecessary files
- Layer caching for faster rebuilds

### Runtime Optimizations
- Nginx with gzip compression
- Static asset caching (1 year)
- HTML caching (1 hour)
- Optimized worker processes

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   docker-compose down
   # Or change port in docker-compose.yml
   ```

2. **Build failures**
   ```bash
   # Clean build
   docker-compose down -v
   docker system prune -f
   docker-compose up --build
   ```

3. **Permission issues**
   ```bash
   # Fix file permissions
   sudo chown -R $USER:$USER .
   ```

4. **Development hot reload not working**
   ```bash
   # Ensure volume mounts are correct
   docker-compose --profile dev up js-samples-dev
   ```

### Debug Commands
```bash
# Check container logs
docker-compose logs -f js-samples

# Enter container
docker-compose exec js-samples sh

# Check health status
docker-compose ps
```

## 🚀 Deployment

### Production Deployment
```bash
# Build for production
docker build -t your-registry/google-maps-js-samples:latest .

# Push to registry
docker push your-registry/google-maps-js-samples:latest

# Deploy
docker run -d -p 80:80 --name js-samples your-registry/google-maps-js-samples:latest
```

### Environment-Specific Configurations
- Update `nginx.conf` for production domains
- Configure SSL certificates
- Set up reverse proxy if needed
- Configure monitoring and logging

## 📝 Notes

- The production build creates a static site served by nginx
- Development environment supports hot reload for faster iteration
- All containers run as non-root users for security
- Health checks ensure container reliability
- Optimized for both development and production use cases
