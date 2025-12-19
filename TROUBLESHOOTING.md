# 🚨 QUICK FIX: "Failed to Fetch" Error

## The Problem
Registration is failing with: `TypeError: Failed to fetch`

This means the frontend **cannot connect** to the backend API.

---

## ⚡ IMMEDIATE SOLUTIONS

### Solution 1: Use the Proxy (Easiest)

The proxy is already configured! Just update your API URL:

1. **Edit `.env.local`:**
   ```env
   VITE_API_BASE_URL=/api
   ```

2. **Restart dev server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

3. **Test registration again**

The proxy will forward `/api/*` requests to `https://emireq.com/api/*`

---

### Solution 2: Check if Backend is Running

Is the backend actually accessible?

**Test in terminal:**
```bash
curl -X POST https://emireq.com/api/startups/register/ \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"testpass123"}'
```

**Expected:**
- ✅ If you get JSON response → Backend is working
- ❌ If you get "Connection refused" → Backend is down
- ❌ If you get CORS error → CORS not configured

---

### Solution 3: Use Local Backend

If backend is running on your machine:

1. **Update `.env.local`:**
   ```env
   VITE_API_BASE_URL=http://localhost:8000/api
   ```

2. **Restart dev server:**
   ```bash
   npm run dev
   ```

---

### Solution 4: Contact Backend Team

If none of the above work, the backend team needs to:

1. **Enable CORS** for your frontend origin:
   ```python
   # Django example
   CORS_ALLOWED_ORIGINS = [
       "http://localhost:5173",
       "https://your-domain.com"
   ]
   ```

2. **Verify endpoints exist:**
   - `POST /startups/register/`
   - `POST /startups/login/`
   - etc.

3. **Check server is accessible** from your network

---

## 🔍 Debug Steps

### Step 1: Check Current API URL

Open browser console, you should see:
```
🔌 API Base URL: <url>
```

### Step 2: Check Network Tab

1. Open DevTools → Network tab
2. Try to register
3. Look for the failed request
4. Click on it to see details

**Common errors:**
- `(failed) net::ERR_CONNECTION_REFUSED` → Server not running
- `(failed) net::ERR_NAME_NOT_RESOLVED` → Wrong domain
- CORS error → Backend CORS not configured

### Step 3: Check Console Logs

After trying to register, you should see:
```
📤 Attempting to register startup: { email: "...", endpoint: "/startups/register/" }
```

Then either:
- ✅ `✅ Registration successful`
- ❌ `❌ Registration failed: ...`

---

## 📋 Current Configuration

Your app will try to connect to:
1. First: Value from `.env.local` → `VITE_API_BASE_URL`
2. Fallback: `https://emireq.com/api`

**Check your `.env.local` file:**
```bash
cat .env.local
```

---

## 🛠️ Step-by-Step Fix

### If Backend is at `https://emireq.com/api`:

1. **Use the proxy** (already configured in `vite.config.js`):
   ```bash
   echo 'VITE_API_BASE_URL=/api' > .env.local
   npm run dev
   ```

### If Backend is at `http://localhost:8000/api`:

1. **Point to localhost**:
   ```bash
   echo 'VITE_API_BASE_URL=http://localhost:8000/api' > .env.local
   npm run dev
   ```

### If Backend is Down/Not Accessible:

1. **Contact backend team** or
2. **Use mock data** (temporary):

Edit `src/services/startupService.js` and add at the top of `register()`:

```javascript
register: async (email, password) => {
  // TEMPORARY MOCK - Remove before production!
  console.warn('⚠️ USING MOCK DATA - Backend not available');
  await new Promise(r => setTimeout(r, 1000));
  const mockData = {
    token: 'mock-token-' + Date.now(),
    next_step: 1,
    message: 'Mock registration'
  };
  localStorage.setItem('startup_token', mockData.token);
  localStorage.setItem('user_type', 'startup');
  return mockData;
  // END MOCK
  
  // ... rest of code
```

---

## ✅ Verification

After applying fix, test:

1. Go to `/startups/register`
2. Enter email and password
3. Click Register
4. Check console for logs
5. Should navigate to onboarding

---

## 🆘 Still Not Working?

Share these details:

1. **`.env.local` contents:**
   ```bash
   cat .env.local
   ```

2. **Console logs** (all messages)

3. **Network tab screenshot** of failed request

4. **Backend status:**
   ```bash
   curl -I https://emireq.com/api/startups/register/
   ```

---

## 📞 Contact

- **Backend Issues**: Ask backend team about CORS and endpoint availability
- **Frontend Issues**: Check console logs and Network tab
- **Proxy Issues**: Restart dev server after changing `.env.local`

---

**TL;DR: Edit `.env.local` to set `VITE_API_BASE_URL=/api` and restart dev server!**
