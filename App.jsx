import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./src/context/AuthContext.jsx";


import HomeLanding from "./HomeLanding.jsx";

import MarketplacePage from "./marketplace";
import TokenizePage from "./tokenize";
import InvestorsPage from "./investors";
import EventsPage from "./events";
import AboutPage from "./about";

import StartupRegisterPage from "./modules/startup-onboarding/RegisterPage.jsx";
import StartupLoginPage from "./modules/startup-onboarding/LoginPage.jsx";
import StartupOnboardingForm from "./modules/startup-onboarding/MultistepForm.jsx";

import InvestorRegisterPage from "./modules/investor-onboarding/InvestorRegisterPage.jsx";
import InvestorLoginPage from "./modules/investor-onboarding/InvestorLoginPage.jsx";
import InvestorOnboardingForm from "./modules/investor-onboarding/InvestorMultistepForm.jsx";

const StartupDashboardApp = lazy(() => import("./modules/startup-dashboard/App.jsx"));
const InvestorDashboardApp = lazy(() => import("./modules/investor-dashboard/App.jsx"));
const SuperAdminDashboardApp = lazy(() => import("./modules/super-admin-dashboard/App.jsx"));

export default function App() {
  return (
    <AuthProvider>
      {/* ✅ GLOBAL HEADER */}
     

      <Routes>
        {/* PUBLIC PAGES */}
        <Route path="/" element={<HomeLanding />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/tokenize" element={<TokenizePage />} />
        <Route path="/investors" element={<InvestorsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* STARTUPS */}
        <Route path="/startups/register" element={<StartupRegisterPage />} />
        <Route path="/startups/login" element={<StartupLoginPage />} />
        <Route path="/startups/onboarding" element={<StartupOnboardingForm />} />
        <Route
          path="/startups/dashboard"
          element={
            <Suspense fallback={<div>Loading startup dashboard…</div>}>
              <StartupDashboardApp />
            </Suspense>
          }
        />

        {/* INVESTORS */}
        <Route path="/investors/register" element={<InvestorRegisterPage />} />
        <Route path="/investors/login" element={<InvestorLoginPage />} />
        <Route path="/investors/onboarding" element={<InvestorOnboardingForm />} />
        <Route
          path="/investors/dashboard"
          element={
            <Suspense fallback={<div>Loading investor dashboard…</div>}>
              <InvestorDashboardApp />
            </Suspense>
          }
        />

        {/* ADMIN */}
        <Route
          path="/admin/dashboard"
          element={
            <Suspense fallback={<div>Loading admin dashboard…</div>}>
              <SuperAdminDashboardApp />
            </Suspense>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
