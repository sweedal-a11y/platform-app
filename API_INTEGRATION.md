# EmireQ API Integration Documentation

## Overview

This document describes the API integration for startup and investor onboarding, registration, and authentication in the EmireQ platform.

## Base URL

```
https://emireq.com/api
```

## Architecture

The API integration follows a modular architecture:

```
src/
├── config/
│   └── api.js                    # Axios configuration and interceptors
├── services/
│   ├── startupService.js         # Startup API endpoints
│   └── investorService.js        # Investor API endpoints
├── hooks/
│   ├── useStartupAuth.js         # Startup authentication hook
│   └── useInvestorAuth.js        # Investor authentication hook
└── context/
    └── AuthContext.jsx           # Global authentication state
```

## Features

### 1. **API Configuration** (`src/config/api.js`)
- Centralized Axios instance with base URL
- Request interceptor for automatic token injection
- Response interceptor for error handling and token cleanup
- Automatic 401 handling with token removal

### 2. **Service Layer**

#### Startup Service (`src/services/startupService.js`)
```javascript
import startupService from './src/services/startupService';

// Register new startup
await startupService.register(email, password);

// Login
await startupService.login(username, password);

// Update onboarding step
await startupService.updateOnboardingStep(stepNumber, data);

// Get dashboard data
await startupService.getDashboard();

// Logout
startupService.logout();
```

#### Investor Service (`src/services/investorService.js`)
```javascript
import investorService from './src/services/investorService';

// Register new investor
await investorService.register(email, password);

// Login
await investorService.login(username, password);

// Update onboarding step
await investorService.updateOnboardingStep(stepNumber, data);

// Get dashboard data
await investorService.getDashboard();

// Logout
investorService.logout();
```

### 3. **Custom Hooks**

#### useStartupAuth Hook
```javascript
import useStartupAuth from './src/hooks/useStartupAuth';

function MyComponent() {
  const { 
    register, 
    login, 
    logout, 
    updateOnboardingStep,
    getDashboard,
    loading, 
    error 
  } = useStartupAuth();

  // Use the methods
  const handleRegister = async () => {
    try {
      const response = await register(email, password);
      console.log('Registration successful:', response);
    } catch (err) {
      console.error('Error:', error);
    }
  };
}
```

#### useInvestorAuth Hook
```javascript
import useInvestorAuth from './src/hooks/useInvestorAuth';

function MyComponent() {
  const { 
    register, 
    login, 
    logout, 
    updateOnboardingStep,
    getDashboard,
    loading, 
    error 
  } = useInvestorAuth();

  // Use the methods
}
```

### 4. **Authentication Context**

```javascript
import { AuthProvider, useAuth } from './src/context/AuthContext';

// Wrap your app with AuthProvider
function App() {
  return (
    <AuthProvider>
      <YourApp />
    </AuthProvider>
  );
}

// Use auth context in components
function MyComponent() {
  const { user, userType, isAuthenticated, loading, logout } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome {userType}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
```

## API Endpoints

### Startup Endpoints

#### 1. Register Startup
```http
POST /startups/register/
Content-Type: application/json

{
  "email": "founder@example.com",
  "password": "ChangeMe123!"
}
```

**Response:**
```json
{
  "token": "your-auth-token",
  "next_step": 1,
  "message": "Registration successful"
}
```

#### 2. Login Startup
```http
POST /startups/login/
Content-Type: application/json

{
  "username": "founder@example.com",
  "password": "ChangeMe123!"
}
```

**Response:**
```json
{
  "token": "your-auth-token",
  "onboarding_complete": false,
  "next_step": 5
}
```

#### 3. Update Onboarding Step
```http
PUT /startups/onboarding/{step}/
Authorization: Token your-auth-token
Content-Type: application/json

{
  "company_name": "Acme Technologies",
  "registration_number": "REG123456"
}
```

**Response:**
```json
{
  "success": true,
  "next_step": 2,
  "message": "Step saved successfully"
}
```

#### 4. Get Startup Dashboard
```http
GET /startups/dashboard/
Authorization: Token your-auth-token
```

**Response:**
```json
{
  "company": {
    "name": "Acme Technologies",
    "industry": "FinTech"
  },
  "metrics": {
    "profile_views": 150,
    "investor_interest": 25
  }
}
```

### Investor Endpoints

#### 1. Register Investor
```http
POST /investors/register/
Content-Type: application/json

{
  "email": "investor@example.com",
  "password": "ChangeMe123!"
}
```

#### 2. Login Investor
```http
POST /investors/login/
Content-Type: application/json

{
  "username": "investor@example.com",
  "password": "ChangeMe123!"
}
```

#### 3. Update Onboarding Step
```http
PUT /investors/onboarding/{step}/
Authorization: Token your-auth-token
Content-Type: application/json

{
  "sector_interests": [3, 5, 12],
  "investment_range": "$10k-$50k"
}
```

#### 4. Get Investor Dashboard
```http
GET /investors/dashboard/
Authorization: Token your-auth-token
```

## Token Storage

Tokens are automatically stored in `localStorage`:
- **Startup token**: `startup_token`
- **Investor token**: `investor_token`
- **User type**: `user_type` (either "startup" or "investor")

## Error Handling

All service methods throw errors that can be caught:

```javascript
try {
  await startupService.register(email, password);
} catch (error) {
  // Error contains response data or error message
  console.error(error);
  // error can be:
  // - { email: ["This field is required."] }
  // - { detail: "Invalid credentials" }
  // - "Network error"
}
```

## Integration Examples

### 1. Registration Page

```javascript
import React, { useState } from 'react';
import useStartupAuth from './src/hooks/useStartupAuth';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, loading, error } = useStartupAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register(email, password);
      // Navigate to onboarding
      navigate('/startups/onboarding');
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {error && <p className="error">{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}
```

### 2. Onboarding Form

```javascript
import React, { useState } from 'react';
import useStartupAuth from './src/hooks/useStartupAuth';

function OnboardingForm() {
  const [formData, setFormData] = useState({
    company_name: '',
    industry: '',
  });
  const { updateOnboardingStep, loading, error } = useStartupAuth();
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = async () => {
    try {
      const response = await updateOnboardingStep(currentStep, formData);
      if (response.next_step) {
        setCurrentStep(response.next_step);
      } else {
        // Onboarding complete
        navigate('/startups/dashboard');
      }
    } catch (err) {
      console.error('Failed to save step:', err);
    }
  };

  return (
    <div>
      <input
        value={formData.company_name}
        onChange={(e) => setFormData({...formData, company_name: e.target.value})}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Saving...' : 'Continue'}
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
```

### 3. Protected Route

```javascript
import { Navigate } from 'react-router-dom';
import { useAuth } from './src/context/AuthContext';

function ProtectedRoute({ children, requiredType }) {
  const { isAuthenticated, userType, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredType && userType !== requiredType) {
    return <Navigate to="/" replace />;
  }

  return children;
}

// Usage in routes
<Route 
  path="/startups/dashboard" 
  element={
    <ProtectedRoute requiredType="startup">
      <StartupDashboard />
    </ProtectedRoute>
  } 
/>
```

## Environment Configuration

To change the API base URL, edit `src/config/api.js`:

```javascript
export const BASE_URL = 'https://emireq.com/api';
// or for development:
// export const BASE_URL = 'http://localhost:8000/api';
```

## Testing

You can test the API integration using these credentials:

**Startup Test Account:**
- Email: `founder@example.com`
- Password: `ChangeMe123!`

**Investor Test Account:**
- Email: `investor@example.com`
- Password: `ChangeMe123!`

## CORS Considerations

If you encounter CORS errors during development, ensure your backend has proper CORS configuration for:
- `http://localhost:5173` (Vite default)
- `http://localhost:3000` (if applicable)

## Troubleshooting

### Token not being sent with requests
- Ensure `localStorage` has the correct token
- Check that the token key matches in the interceptor
- Verify the Authorization header format: `Token <token>`

### 401 Unauthorized errors
- Token may have expired - user will need to log in again
- Token is automatically cleared on 401 responses

### Network errors
- Check API base URL is correct
- Verify backend is running
- Check CORS configuration

## Next Steps

1. **Implement refresh tokens** for long-lived sessions
2. **Add request retry logic** for failed network requests
3. **Implement social authentication** (Google, LinkedIn)
4. **Add request caching** for dashboard data
5. **Implement WebSocket** for real-time updates

## Support

For API issues or questions, contact the backend team or refer to the main API documentation.
