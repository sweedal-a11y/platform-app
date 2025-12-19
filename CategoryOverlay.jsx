import React from "react";
import "./CategoryOverlay.css";

export default function CategoryOverlay() {
  return (
    <div className="overlay-container" aria-hidden>
      <div className="purple-tooltip-box">
        <span className="purple-tooltip-text">
          Please select your interested topic to make our
        </span>
      </div>

      <div className="purple-arrow-pointer" />
    </div>
  );
}

