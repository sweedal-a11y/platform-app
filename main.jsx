import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Header from "./Header.jsx";
import { AuthProvider } from "./src/context/AuthContext.jsx";
import "./index.css";
import "./App.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <AuthProvider>

      {/* 🔥 HEADER IS OUTSIDE APP */}
      <Header />

      {/* ONLY ROUTES BELOW */}
      <App />

    </AuthProvider>
  </BrowserRouter>
);



