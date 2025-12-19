# EmireQ Platform - API Integration Architecture

## 📐 System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                         EmireQ Frontend App                          │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
         ┌──────────▼─────────┐         ┌──────────▼──────────┐
         │   Startup Flows    │         │   Investor Flows    │
         └──────────┬─────────┘         └──────────┬──────────┘
                    │                               │
    ┌───────────────┼───────────────┐   ┌──────────┼───────────────┐
    │               │               │   │          │               │
┌───▼────┐   ┌─────▼──────┐   ┌───▼────┐ ┌───▼────┐  ┌───────▼─────┐
│Register│   │   Login    │   │Onboard │ │Register│  │    Login    │
│ Page   │   │   Page     │   │  Form  │ │ Page   │  │    Page     │
└───┬────┘   └─────┬──────┘   └───┬────┘ └───┬────┘  └───────┬─────┘
    │              │              │          │                 │
    └──────────────┴──────────────┴──────────┴─────────────────┘
                                    │
                    ┌───────────────▼───────────────┐
                    │     Custom React Hooks        │
                    │  ┌─────────────────────────┐  │
                    │  │  useStartupAuth()       │  │
                    │  │  - register()           │  │
                    │  │  - login()              │  │
                    │  │  - updateOnboardingStep │  │
                    │  │  - getDashboard()       │  │
                    │  │  - logout()             │  │
                    │  └─────────────────────────┘  │
                    │  ┌─────────────────────────┐  │
                    │  │  useInvestorAuth()      │  │
                    │  │  - register()           │  │
                    │  │  - login()              │  │
                    │  │  - updateOnboardingStep │  │
                    │  │  - getDashboard()       │  │
                    │  │  - logout()             │  │
                    │  └─────────────────────────┘  │
                    └───────────────┬───────────────┘
                                    │
                    ┌───────────────▼───────────────┐
                    │      Service Layer            │
                    │  ┌─────────────────────────┐  │
                    │  │  startupService         │  │
                    │  │  - register()           │  │
                    │  │  - login()              │  │
                    │  │  - updateOnboardingStep │  │
                    │  │  - getDashboard()       │  │
                    │  │  - isAuthenticated()    │  │
                    │  └─────────────────────────┘  │
                    │  ┌─────────────────────────┐  │
                    │  │  investorService        │  │
                    │  │  - register()           │  │
                    │  │  - login()              │  │
                    │  │  - updateOnboardingStep │  │
                    │  │  - getDashboard()       │  │
                    │  │  - isAuthenticated()    │  │
                    │  └─────────────────────────┘  │
                    └───────────────┬───────────────┘
                                    │
                    ┌───────────────▼───────────────┐
                    │     API Client (Axios)        │
                    │  ┌─────────────────────────┐  │
                    │  │  Request Interceptor    │  │
                    │  │  - Add Auth Token       │  │
                    │  │  - Set Headers          │  │
                    │  └─────────────────────────┘  │
                    │  ┌─────────────────────────┐  │
                    │  │  Response Interceptor   │  │
                    │  │  - Handle 401 Errors    │  │
                    │  │  - Clear Tokens         │  │
                    │  └─────────────────────────┘  │
                    └───────────────┬───────────────┘
                                    │
                                    │ HTTPS
                                    │
                    ┌───────────────▼───────────────┐
                    │    Backend API Server         │
                    │  https://emireq.com/api       │
                    └───────────────────────────────┘
```

## 🔄 Authentication Flow

```
User Action → Form Validation → Hook Method → Service Call → API Request
     ↓             ↓                ↓             ↓              ↓
 Register      Check Fields    useStartupAuth  startupService   POST /startups/register/
     ↓             ↓                ↓             ↓              ↓
   Form        Show Errors      Set Loading   Add Headers    Send to Backend
     ↓                              ↓             ↓              ↓
  Submit                       Call Service  Axios Request   Process Request
                                    ↓             ↓              ↓
                              Return Response  Get Response   Return Token
                                    ↓             ↓              ↓
                              Update Context   Store Token    Update User
                                    ↓             ↓              ↓
                              Show Success    Update State   Navigate
```

## 💾 State Management

```
┌─────────────────────────────────────────────────────────────┐
│                    AuthContext (Global)                      │
│  ┌────────────────────────────────────────────────────┐     │
│  │  State:                                            │     │
│  │  - user: { token }                                 │     │
│  │  - userType: "startup" | "investor"                │     │
│  │  - isAuthenticated: boolean                        │     │
│  │  - loading: boolean                                │     │
│  │                                                     │     │
│  │  Methods:                                          │     │
│  │  - login(token, type)                              │     │
│  │  - logout()                                        │     │
│  └────────────────────────────────────────────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            │
            ┌───────────────┴───────────────┐
            │                               │
┌───────────▼──────────┐       ┌───────────▼──────────┐
│  localStorage        │       │  Component State     │
│  ┌────────────────┐  │       │  ┌────────────────┐  │
│  │ startup_token  │  │       │  │ formData       │  │
│  │ investor_token │  │       │  │ loading        │  │
│  │ user_type      │  │       │  │ error          │  │
│  └────────────────┘  │       │  │ toast          │  │
└──────────────────────┘       │  └────────────────┘  │
                               └──────────────────────┘
```

## 🎯 Component Communication

```
┌────────────────────────────────────────────────────────────────┐
│                         App.jsx                                 │
│                    <AuthProvider>                               │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                      Routes                               │  │
│  │  ┌────────────┐  ┌────────────┐  ┌──────────────────┐   │  │
│  │  │  Register  │  │   Login    │  │    Onboarding    │   │  │
│  │  │            │  │            │  │                  │   │  │
│  │  │  ┌──────┐  │  │  ┌──────┐  │  │   ┌──────────┐  │   │  │
│  │  │  │ Hook │  │  │  │ Hook │  │  │   │   Hook   │  │   │  │
│  │  │  └──┬───┘  │  │  └──┬───┘  │  │   └────┬─────┘  │   │  │
│  │  └─────┼──────┘  └─────┼──────┘  └────────┼────────┘   │  │
│  │        │                │                  │            │  │
│  │        └────────────────┴──────────────────┘            │  │
│  │                         │                               │  │
│  │                    AuthContext                          │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘
```

## 📡 API Request Lifecycle

```
1. Component Render
         │
         ▼
2. User Interaction (Submit Form)
         │
         ▼
3. Hook Method Called (e.g., register())
         │
         ▼
4. Service Method Called
         │
         ▼
5. Axios Instance Prepares Request
         │
         ▼
6. Request Interceptor Runs
   - Add Authorization header
   - Add Content-Type
         │
         ▼
7. HTTP Request Sent to Backend
         │
         ▼
8. Backend Processes Request
         │
         ▼
9. Response Received
         │
         ▼
10. Response Interceptor Runs
    - Check for 401 errors
    - Handle token cleanup if needed
         │
         ▼
11. Service Returns Data/Error
         │
         ▼
12. Hook Updates State
    - loading = false
    - error = null/message
         │
         ▼
13. Component Re-renders
    - Show success/error
    - Navigate if needed
```

## 🔐 Token Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      Token Lifecycle                         │
└─────────────────────────────────────────────────────────────┘

Registration/Login
        │
        ▼
API Returns Token
        │
        ▼
Token Stored in localStorage
   - startup_token or investor_token
        │
        ▼
AuthContext Updated
   - user: { token }
   - isAuthenticated: true
        │
        ▼
Request Interceptor Reads Token
        │
        ▼
Token Added to Headers
   Authorization: Token <token>
        │
        ▼
Authenticated Requests
        │
        ├─── Success ────► Continue
        │
        └─── 401 Error ──► Clear Token
                           Clear Context
                           Redirect to Login
```

## 🛣️ Navigation Logic

```
                    User Action
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   Registration        Login          Onboarding
        │                │                │
        ▼                ▼                ▼
  API Success      API Success      Step Complete
        │                │                │
        ▼                ▼                │
   Store Token      Store Token          │
        │                │                │
        ▼                ▼                ▼
Check next_step   Check onboarding   Last Step?
        │            status               │
        │                │                │
        ├─ Yes ──┐       ├─ Complete ─┐  ├─ No ──► Next Step
        │        │       │            │  │
        ▼        │       ▼            │  ▼
   Onboarding    │   Dashboard        │ Complete
                 │                    │
                 └────────────────────┴────► Dashboard
```

## 📂 File Structure

```
platform-app/
├── App.jsx (✓ Wrapped with AuthProvider)
├── src/
│   ├── config/
│   │   └── api.js (✓ Axios configuration)
│   ├── services/
│   │   ├── startupService.js (✓ Startup API)
│   │   └── investorService.js (✓ Investor API)
│   ├── hooks/
│   │   ├── useStartupAuth.js (✓ Startup hook)
│   │   └── useInvestorAuth.js (✓ Investor hook)
│   └── context/
│       └── AuthContext.jsx (✓ Global auth)
├── modules/
│   ├── startup-onboarding/
│   │   ├── RegisterPage.jsx (✓ Updated)
│   │   ├── LoginPage.jsx (✓ Updated)
│   │   └── MultistepForm.jsx (✓ Updated)
│   └── investor-onboarding/
│       ├── InvestorRegisterPage.jsx (✓ Updated)
│       ├── InvestorLoginPage.jsx (✓ Updated)
│       └── InvestorMultistepForm.jsx (✓ Updated)
└── Documentation/
    ├── API_INTEGRATION.md
    ├── QUICK_START.md
    ├── IMPLEMENTATION_SUMMARY.md
    └── ARCHITECTURE.md (this file)
```

## 🎨 Layer Responsibilities

### **Presentation Layer (Components)**
- Render UI
- Handle user interactions
- Display loading/error states
- Show notifications
- Navigate on success

### **Business Logic Layer (Hooks)**
- Coordinate API calls
- Manage component state
- Handle errors gracefully
- Navigate after actions
- Extract error messages

### **Data Access Layer (Services)**
- Make HTTP requests
- Store/retrieve tokens
- Handle response data
- Throw errors for hooks

### **Infrastructure Layer (Config)**
- Configure Axios
- Add interceptors
- Set base URL and timeout
- Handle global errors

### **State Management (Context)**
- Global auth state
- Persist across routes
- Check auth on mount
- Provide auth methods

## 🚀 Benefits of This Architecture

✅ **Separation of Concerns**: Each layer has a specific responsibility  
✅ **Reusability**: Services and hooks can be used in any component  
✅ **Maintainability**: Changes in one layer don't affect others  
✅ **Testability**: Each layer can be tested independently  
✅ **Scalability**: Easy to add new features  
✅ **Type Safety**: Clear interfaces between layers  
✅ **Error Handling**: Centralized error management  
✅ **Token Management**: Automatic and secure  

## 🔮 Future Enhancements

1. **Request/Response Caching**
2. **Optimistic Updates**
3. **Offline Support**
4. **WebSocket Integration**
5. **Refresh Token Flow**
6. **Request Retry Logic**
7. **Analytics Integration**
8. **Error Boundary Components**

---

This architecture ensures a robust, maintainable, and scalable API integration for the EmireQ platform! 🎊
