import React, { useState } from "react";
import CategoryGrid from "./CategoryGrid";
import CategoryOverlay from "./CategoryOverlay";
import "./categorySelector.css";

const INITIAL = [
  { id: 1, name: "Technology", opportunities: 634, tone: "tech" },
  { id: 2, name: "Real Estate", opportunities: 634, tone: "green" },
  { id: 3, name: "Healthcare", opportunities: 634, tone: "red" },
  { id: 4, name: "AI & Machine Learning", opportunities: 634, tone: "purple" },
  { id: 5, name: "E-Commerce", opportunities: 634, tone: "teal" },
  { id: 6, name: "Events & Entertainment", opportunities: 634, tone: "yellow" },
  { id: 7, name: "Fashion & Beauty", opportunities: 634, tone: "pink" },
];

export default function CategorySelector() {
  // default: two selected like screenshot
  const [selected, setSelected] = useState(new Set());
  const [categories] = useState(INITIAL);

  const toggle = (id) => {
    setSelected((prev) => {
      const copy = new Set(prev);
      if (copy.has(id)) copy.delete(id);
      else copy.add(id);
      return copy;
    });
  };

  const clearAll = () => setSelected(new Set());
  const onContinue = () => {
    // placeholder action: replace with navigation
    alert(`Continue — ${selected.size} selected`);
  };

  return (
    <div className="cs-frame">
      <div className="cs-stepper" aria-hidden>
        <div className="step done">
          <div className="circle done-check">✓</div>
          <span>Setup</span>
        </div>
        <div className="line filled" />
        <div className="step active">
          <div className="circle">2</div>
          <span>Pickup Category</span>
        </div>
        <div className="line" />
        <div className="step">
          <div className="circle">3</div>
          <span>Start Exploring</span>
        </div>
      </div>

      <h2 className="cs-heading">Pickup your Category to start</h2>

      {/* Purple overlay on top-right */}
      <CategoryOverlay />

      {/* Grid */}
      <CategoryGrid
        categories={categories}
        selectedSet={selected}
        onToggle={toggle}
      />

      {/* footer area and yellow bubble */}
      <div className="cs-footer-wrap">
        <div className="cs-left-meta">
          <div className="cs-selected-count">{selected.size} categories selected</div>
        </div>

        <div className="cs-actions">
          <button className="cs-clear" onClick={clearAll}>Clear all</button>
          <button className="cs-continue" onClick={onContinue}>Continue</button>
        </div>
      </div>

      {/* Yellow bubble overlapping grid when something selected */}
      {selected.size > 0 && (
        <div className="cs-continue-bubble" aria-hidden>
          <div className="bubble-inner">
            <div className="bubble-line1">Select continue to <b>complete</b></div>
            <div className="bubble-line2">this step &amp; go to next one</div>
          </div>
          <div className="bubble-arrow" />
        </div>
      )}
    </div>
  );
}