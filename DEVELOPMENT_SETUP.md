# 🔧 Development Setup - Fixing "Failed to Fetch" Error

## Problem

You're seeing this error:
```
❌ Registration failed: TypeError: Failed to fetch
```

This happens because the frontend cannot connect to the backend API.

## Solutions

### Option 1: Use Local Backend (Recommended for Development)

If you have the backend running locally:

1. **Create `.env.local` file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Update `.env.local`:**
   ```env
   VITE_API_BASE_URL=http://localhost:8000/api
   ```

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

### Option 2: Use Proxy Server

If the backend has CORS restrictions, create a proxy:

1. **Create `vite.config.js` proxy:**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     server: {
       proxy: {
         '/api': {
           target: 'https://emireq.com',
           changeOrigin: true,
           secure: false,
         }
       }
     }
   })
   ```

2. **Update API URL in `.env.local`:**
   ```env
   VITE_API_BASE_URL=/api
   ```

3. **Restart dev server:**
   ```bash
   npm run dev
   ```

### Option 3: Use Mock Server (For Testing Without Backend)

Create a mock API server:

1. **Install json-server:**
   ```bash
   npm install -D json-server
   ```

2. **Create `mock-api/db.json`:**
   ```json
   {
     "startups": [],
     "investors": []
   }
   ```

3. **Add to `package.json` scripts:**
   ```json
   {
     "scripts": {
       "mock-api": "json-server --watch mock-api/db.json --port 8000"
     }
   }
   ```

4. **Run mock server:**
   ```bash
   npm run mock-api
   ```

5. **Update `.env.local`:**
   ```env
   VITE_API_BASE_URL=http://localhost:8000
   ```

### Option 4: Contact Backend Team

If the production API should be working:

1. **Check Backend Status:**
   - Is `https://emireq.com/api` accessible?
   - Try: `curl https://emireq.com/api/startups/register/ -I`

2. **Verify CORS Configuration:**
   Backend needs to allow your frontend origin:
   ```python
   # Django example
   CORS_ALLOWED_ORIGINS = [
       "http://localhost:5173",  # Vite dev server
       "https://your-production-domain.com",
   ]
   ```

3. **Check API Endpoints:**
   - Does `/startups/register/` exist?
   - What HTTP methods are allowed?

## Quick Test

Open browser console and run:

```javascript
// Test if API is reachable
fetch('https://emireq.com/api/startups/register/', {
  method: 'OPTIONS'
})
  .then(r => console.log('✅ API is reachable'))
  .catch(e => console.log('❌ Cannot reach API:', e))
```

## Current Configuration

Check what API URL is being used:

1. Open browser console
2. Look for: `🔌 API Base URL: ...`
3. This shows the active API endpoint

## Testing Without Backend

To test the UI without a working backend, temporarily mock the API calls:

**Update `src/services/startupService.js`:**

```javascript
register: async (email, password) => {
  // TEMPORARY: Mock response for testing
  console.log('🧪 MOCK: Register called with', { email, password });
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock response
  const mockResponse = {
    token: 'mock-token-' + Date.now(),
    next_step: 1,
    message: 'Registration successful (MOCK)'
  };
  
  localStorage.setItem('startup_token', mockResponse.token);
  localStorage.setItem('user_type', 'startup');
  
  return mockResponse;
},
```

⚠️ **Remember to remove mock code before production!**

## Troubleshooting Checklist

- [ ] Backend API is running
- [ ] CORS is configured on backend
- [ ] API URL is correct in `.env.local`
- [ ] Dev server was restarted after changing `.env.local`
- [ ] No firewall blocking requests
- [ ] SSL certificate is valid (if using HTTPS)
- [ ] Network/VPN not blocking requests

## Common Errors

### "CORS policy: No 'Access-Control-Allow-Origin' header"
→ Backend needs to add CORS headers

### "net::ERR_CONNECTION_REFUSED"
→ Backend is not running or wrong port

### "net::ERR_NAME_NOT_RESOLVED"
→ Wrong domain/hostname

### "Failed to fetch"
→ Network issue or CORS problem

## Production Checklist

Before deploying to production:

1. Set correct API URL in environment variables
2. Verify CORS allows production domain
3. Test registration flow end-to-end
4. Check SSL certificate
5. Monitor API response times
6. Set up error tracking (Sentry, etc.)

## Need Help?

1. Check browser console for detailed errors
2. Check Network tab for failed requests
3. Contact backend team with error details
4. Share console output and network logs

---

**Quick Fix for Now:**

Use Option 1 (local backend) or Option 3 (mock server) to continue development!
