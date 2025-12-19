# EmireQ API Integration - Quick Start Guide

## 📦 Installation

Axios has been installed:
```bash
npm install axios
```

## 🗂️ Files Created

### Core API Infrastructure
1. **`src/config/api.js`** - Axios instance with interceptors
2. **`src/services/startupService.js`** - Startup API endpoints
3. **`src/services/investorService.js`** - Investor API endpoints
4. **`src/context/AuthContext.jsx`** - Global authentication state
5. **`src/hooks/useStartupAuth.js`** - Startup auth hook
6. **`src/hooks/useInvestorAuth.js`** - Investor auth hook

### Updated Components
1. **Startup Onboarding:**
   - `modules/startup-onboarding/RegisterPage.jsx`
   - `modules/startup-onboarding/LoginPage.jsx`
   - `modules/startup-onboarding/MultistepForm.jsx`

2. **Investor Onboarding:**
   - `modules/investor-onboarding/InvestorRegisterPage.jsx`
   - `modules/investor-onboarding/InvestorLoginPage.jsx`
   - `modules/investor-onboarding/InvestorMultistepForm.jsx`

3. **App.jsx** - Wrapped with AuthProvider

## 🚀 Quick Usage

### Register a Startup
```javascript
import useStartupAuth from './src/hooks/useStartupAuth';

const { register, loading, error } = useStartupAuth();

await register('founder@example.com', 'password123');
```

### Login
```javascript
const { login, loading, error } = useStartupAuth();

await login('founder@example.com', 'password123');
```

### Update Onboarding
```javascript
const { updateOnboardingStep } = useStartupAuth();

await updateOnboardingStep(1, {
  company_name: "Acme Inc",
  registration_number: "REG123"
});
```

## 🔑 API Endpoints

**Base URL:** `https://emireq.com/api`

### Startup
- `POST /startups/register/` - Register
- `POST /startups/login/` - Login
- `PUT /startups/onboarding/{step}/` - Save onboarding step
- `GET /startups/dashboard/` - Get dashboard data

### Investor
- `POST /investors/register/` - Register
- `POST /investors/login/` - Login
- `PUT /investors/onboarding/{step}/` - Save onboarding step
- `GET /investors/dashboard/` - Get dashboard data

## 💾 Token Storage

Tokens are stored in `localStorage`:
- `startup_token` - Startup authentication token
- `investor_token` - Investor authentication token
- `user_type` - Either "startup" or "investor"

## ✨ Features

✅ Automatic token injection in requests  
✅ Automatic 401 handling with token cleanup  
✅ Loading and error states built-in  
✅ Form validation and error display  
✅ Toast notifications  
✅ Navigation after successful actions  
✅ Global authentication context  
✅ Separate hooks for startups and investors  

## 🔧 How It Works

1. **User Registration/Login:**
   - Form submits credentials
   - Service makes API call
   - Token stored in localStorage
   - AuthContext updated
   - User redirected to onboarding/dashboard

2. **Onboarding:**
   - Multi-step form collects data
   - Each step saves to API with step number
   - Backend tracks progress
   - On completion, redirect to dashboard

3. **Authenticated Requests:**
   - Axios interceptor adds token automatically
   - If 401 received, tokens cleared and user redirected

## 🎯 Next Steps

1. **Test the integration** with real API
2. **Add protected routes** for authenticated pages
3. **Implement error boundaries** for better error handling
4. **Add loading skeletons** for better UX
5. **Implement token refresh** for long sessions

## 📖 Documentation

See `API_INTEGRATION.md` for comprehensive documentation including:
- Detailed API endpoints
- Error handling
- Integration examples
- Protected routes
- Testing instructions
- Troubleshooting guide

## 🆘 Common Issues

**CORS Errors:**
- Backend needs to allow your frontend origin
- Dev: `http://localhost:5173`
- Prod: Your production domain

**Token not sent:**
- Check localStorage has the token
- Verify axios interceptor is working
- Check Authorization header format

**401 Errors:**
- Token expired - user needs to login again
- Tokens automatically cleared on 401

## 📞 Support

For questions or issues:
1. Check `API_INTEGRATION.md`
2. Review browser console for errors
3. Check Network tab for API responses
4. Contact backend team for API issues
