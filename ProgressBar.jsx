// ProgressBarStaticHalf.jsx
import React from "react";
import "./ProgressBar.css";
import "./AIDiscoveryDropdown.jsx"
/**
 * Static Progress Bar — Half Complete
 * - Step 1: Completed (tick visible)
 * - Connector 1: Half filled (50%)
 * - Step 2: Incomplete
 * - Step 3: Incomplete
 * - No animation or state changes
 */
export default function ProgressBarStaticHalf() {
  // You can easily change these fill percentages if needed later.
  const connector1Fill = "50%";
  const connector2Fill = "0%";

  return (
    <nav className="progress-bar" aria-label="Progress">
      {/* STEP 1 — Completed */}
      <div className="progress-step completed">
        <div className="circle">
          <span className="check" aria-hidden="true" />
          <span className="num">1</span>
        </div>
        <div className="label">
          <div className="title">Setup</div>
        </div>
      </div>

      {/* CONNECTOR 1 — Half filled */}
      <div className="connector connector--solid" aria-hidden="true">
        <div
          className="connector__fill"
          style={{ width: connector1Fill }}
        />
      </div>

      {/* STEP 2 — Incomplete */}
      <div className="progress-step">
        <div className="circle">
          <span className="num">2</span>
        </div>
        <div className="label">
          <div className="title">Pickup Category</div>
        </div>
      </div>

      {/* CONNECTOR 2 — Empty */}
      <div className="connector connector--pale" aria-hidden="true">
        <div
          className="connector__fill"
          style={{ width: connector2Fill }}
        />
      </div>

      {/* STEP 3 — Incomplete */}
      <div className="progress-step">
        <div className="circle">
          <span className="num">3</span>
        </div>
        <div className="label">
          <div className="title">Start Exploring</div>
        </div>
      </div>
    </nav>
  );
}
