# 🐳 Docker Deployment - EmireQ Platform

## ✅ App is Running!

Your EmireQ platform is now running in Docker at:

**URL:** http://localhost:8080

---

## 📋 Container Info

- **Container Name:** `emireq-app`
- **Image:** `emireq-platform-app`
- **Port:** 8080 (host) → 8080 (container)
- **Status:** ✅ Running

---

## 🎯 Quick Commands

### View Container Status
```bash
docker ps | grep emireq-app
```

### View Container Logs
```bash
docker logs emireq-app
```

### Follow Logs in Real-time
```bash
docker logs -f emireq-app
```

### Stop Container
```bash
docker stop emireq-app
```

### Start Container Again
```bash
docker start emireq-app
```

### Restart Container
```bash
docker restart emireq-app
```

### Remove Container
```bash
docker stop emireq-app
docker rm emireq-app
```

### Rebuild and Run
```bash
# Stop and remove old container
docker stop emireq-app && docker rm emireq-app

# Rebuild image
docker build -t emireq-platform-app .

# Run new container
docker run -d -p 8080:8080 --name emireq-app emireq-platform-app
```

---

## 🔧 Configuration

### Nginx Configuration
The app uses Nginx with proxies configured for:

1. **`/search`** → Proxies to `https://app.emireq.com`
2. **`/api`** → Proxies to `https://emireq.com/api`

This means API calls to `/api/*` are automatically forwarded to the backend!

### Environment Variables
Built with: `VITE_API_BASE_URL=/api`

---

## 🌐 Access the App

Open your browser and go to:
```
http://localhost:8080
```

### Test Routes:
- **Home:** http://localhost:8080/
- **Startup Register:** http://localhost:8080/startups/register
- **Startup Login:** http://localhost:8080/startups/login
- **Investor Register:** http://localhost:8080/investors/register
- **Investor Login:** http://localhost:8080/investors/login

---

## 🐛 Troubleshooting

### Check if container is running:
```bash
docker ps
```

### View error logs:
```bash
docker logs emireq-app
```

### Container won't start:
```bash
# Check for port conflicts
sudo lsof -i :8080

# Or use different port:
docker run -d -p 9090:8080 --name emireq-app emireq-platform-app
# Then access at http://localhost:9090
```

### Nginx errors:
```bash
# Enter container
docker exec -it emireq-app sh

# Check nginx config
nginx -t

# View nginx error logs
cat /var/log/nginx/error.log
```

### Rebuild from scratch:
```bash
docker stop emireq-app
docker rm emireq-app
docker rmi emireq-platform-app
docker build --no-cache -t emireq-platform-app .
docker run -d -p 8080:8080 --name emireq-app emireq-platform-app
```

---

## 📊 What's Inside

The Docker container includes:

1. **React App** - Built production bundle
2. **Nginx** - Web server on port 8080
3. **API Proxy** - Forwards `/api/*` to backend
4. **Search Proxy** - Forwards `/search` to app.emireq.com
5. **Static Assets** - All fonts, images, CSS, JS

---

## 🔐 API Integration

The app is configured to use `/api` which Nginx proxies to `https://emireq.com/api`.

**Registration Flow:**
```
Browser → http://localhost:8080/startups/register
    ↓
API Call → /api/startups/register/
    ↓
Nginx Proxy → https://emireq.com/api/startups/register/
    ↓
Backend Server
```

**No CORS issues** because requests go through the same origin! ✅

---

## 🚀 Production Deployment

For production, push to your Docker registry:

```bash
# Tag for registry
docker tag emireq-platform-app your-registry/emireq-platform-app:latest

# Push to registry
docker push your-registry/emireq-platform-app:latest

# Deploy on production
docker pull your-registry/emireq-platform-app:latest
docker run -d -p 8080:8080 --name emireq-app your-registry/emireq-platform-app:latest
```

---

## 📝 Build Info

- **Base Images:** 
  - Build: `node:18-alpine`
  - Runtime: `nginx:alpine`
- **Build Time:** ~84 seconds
- **Image Size:** Check with `docker images emireq-platform-app`

---

## ✨ Next Steps

1. **Test the app:** http://localhost:8080
2. **Try registration:** http://localhost:8080/startups/register
3. **Check logs:** `docker logs -f emireq-app`
4. **Monitor:** Watch for any errors in logs

---

## 📞 Container Management

### Stop all EmireQ containers:
```bash
docker stop $(docker ps -q --filter name=emireq)
```

### Remove all EmireQ containers:
```bash
docker rm $(docker ps -aq --filter name=emireq)
```

### Clean up unused images:
```bash
docker image prune -a
```

---

**✅ Your app is live at http://localhost:8080!**

Enjoy! 🎉
