// src/components/SearchWithDiscovery.jsx
import React, { useState } from "react";
import SearchHero from "./SearchHero";
import AIDiscoveryDropdown from "./AIDiscoveryDropdown";
import "./SearchWithDiscovery.css";

export default function SearchWithDiscovery() {
  const [query, setQuery] = useState("");

  return (
    <div className="search-discovery-container">
      {/* 🔍 SEARCH BAR */}
      <SearchHero query={query} setQuery={setQuery} />

      {/* 🤖 AI DROPDOWN */}
      {query.trim().length > 0 && <AIDiscoveryDropdown query={query} />}
    </div>
  );
}
