import React from "react";
import { FiTrendingUp } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import "./AIDiscoveryDropdown.css";

export default function AIDiscoveryDropdown({ query = "" }) {
  const trending = [
    { label: "AI & Machine Learning Startups", growth: "+156%" },
    { label: "Renewable Energy Projects", growth: "+89%" },
    { label: "Healthcare Technology", growth: "+67%" },
  ];

  // Filter trending items when query has text
  const filtered =
    query.trim().length > 0
      ? trending.filter((item) =>
          item.label.toLowerCase().includes(query.toLowerCase())
        )
      : trending;

  return (
    <div className="ai-dropdown-wrapper">
      {/* You can place your input or button here if needed */}
      {/* Example: <input type="text" placeholder="Search..." className="ai-input" /> */}

      <section
        className="ai-dropdown"
        aria-label="AI-powered discovery suggestions"
      >
        {/* --- AI Suggestion Card --- */}
        <div className="ai-card" role="region" aria-label="AI Discovery card">
          <div className="ai-icon-box">
            <HiSparkles className="ai-icon" aria-hidden="true" />
          </div>
          <div className="ai-card-content">
            <h4 className="ai-card-title">AI-Powered Discovery</h4>
            <p className="ai-card-sub">
              Let our AI analyze market trends and suggest personalized
              investment opportunities.
            </p>
          </div>
        </div>

        <hr className="ai-divider" />

        {/* --- TRENDING SEARCHES --- */}
        <div
          className="ai-trending"
          role="region"
          aria-label="Trending searches"
        >
          <div className="ai-trending-header">
            <FiTrendingUp className="ai-trending-icon" aria-hidden="true" />
            <span>TRENDING SEARCHES</span>
          </div>

          <ul className="ai-trending-list">
            {filtered.length > 0 ? (
              filtered.map((item, index) => (
                <li key={index} className="ai-trending-item">
                  <span className="ai-trending-label">{item.label}</span>
                  <span className="ai-trending-growth">{item.growth}</span>
                </li>
              ))
            ) : (
              <li className="ai-empty">No results found</li>
            )}
          </ul>
        </div>
      </section>
    </div>
  );
}
