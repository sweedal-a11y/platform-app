import React from "react";
import "./StatsOverview.css";

const avatars = [
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

export default function StatsOverview() {
  return (
    <section className="statsui-section">
      <div className="statsui-grid">

        {/* LEFT CARD */}
        <div className="statsui-card statsui-roi">
          <div className="statsui-roi-icon">
            {/* replace svg */}
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_411)">
<path d="M36.4397 9.5061L21.3883 24.5576L13.4665 16.6357L1.58374 28.5185" stroke="#00D492" stroke-width="3.16873" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.9338 9.5061H36.44V19.0123" stroke="#00D492" stroke-width="3.16873" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_411">
<rect width="38.0247" height="38.0247" fill="white"/>
</clipPath>
</defs>
</svg>

          </div>

          <div className="statsui-roi-content">
            <span className="statsui-label">Avg. ROI</span>
            <h2 className="statsui-value">24.8%</h2>
            <p className="statsui-sub">Above market avg</p>
          </div>
        </div>

        {/* CENTER CARD */}
        <div className="statsui-card statsui-trust">
          <h1 className="statsui-big">
            500<span>+</span>
          </h1>

          <p className="statsui-desc">
            Trusted by over 500+ investors and buyers around the globe,
            we’ve built a solid reputation!
          </p>

          <div className="statsui-avatars">
            {avatars.map((src, i) => (
              <img key={i} src={src} alt="" />
            ))}
            <div className="statsui-plus">+</div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="statsui-card statsui-volume">
          <div className="statsui-volume-head">
            <span>Total Volume</span>
            <h2>$130.80M</h2>
            <div className="statsui-badge">▲ 810%</div>
          </div>

          <div className="statsui-chart">
            <svg viewBox="0 0 400 160" preserveAspectRatio="none">
              <defs>
                <linearGradient id="statsuiGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* dashed grid */}
              <g stroke="#cbd5e1" strokeDasharray="6 6">
                <line x1="0" y1="40" x2="400" y2="40" />
                <line x1="0" y1="80" x2="400" y2="80" />
                <line x1="0" y1="120" x2="400" y2="120" />
              </g>

              {/* area */}
              <path
                d="M0 140 
                   L40 120 L80 118 L120 105 
                   L160 110 L200 90 L240 85 
                   L280 70 L320 55 L360 40 
                   L400 32 
                   L400 160 L0 160 Z"
                fill="url(#statsuiGrad)"
              />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}
