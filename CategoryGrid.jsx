import React from "react";
import "./CategoryGrid.css";

/* Small Icon component: chooses style by tone */
function Icon({ tone, name }) {
  const colors = {
    tech: "#6366F1",
    green: "#10B981",
    red: "#EF4444",
    purple: "#8B5CF6",
    teal: "#0891B2",
    yellow: "#F5D059",
    pink: "#F472B6",
  };
  const fill = colors[tone] || "#6366F1";

  // simple square icon with colored stroke / fill
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden className="cg-icon-svg">
      <rect x="4" y="4" width="40" height="40" rx="8" fill={fill} fillOpacity="0.12" stroke={fill} strokeOpacity="0.18" strokeWidth="1.2"/>
      <circle cx="24" cy="24" r="6" stroke={fill} strokeWidth="1.6" fill="none"/>
    </svg>
  );
}

export default function CategoryGrid({ categories = [], selectedSet = new Set(), onToggle = () => {} }) {
  return (
    <div className="cg-grid-wrap">
      <div className="cg-grid" role="list" aria-label="category list">
        {categories.map((c) => {
          const isSelected = selectedSet.has(c.id);
          return (
            <article key={c.id} className={`cg-card ${isSelected ? "selected" : ""}`} role="listitem" tabIndex={0}>
              <div className="cg-card-top">
                <div className={`cg-icon ${c.tone}`}>
                  <Icon tone={c.tone} name={c.name} />
                </div>

                <button
                  type="button"
                  className={`cg-toggle ${isSelected ? "on" : "off"}`}
                  aria-pressed={isSelected}
                  aria-label={`${isSelected ? "Deselect" : "Select"} ${c.name}`}
                  onClick={(e) => { e.stopPropagation(); onToggle(c.id); }}
                />
              </div>

              <div className="cg-card-body">
                <h4 className="cg-title">{c.name}</h4>
                <p className="cg-sub">{c.opportunities} Opportunities</p>
              </div>
            </article>
          );
        })}

        {/* Browse Category card */}
        <div
          className="cg-card cg-browse"
          role="button"
          tabIndex={0}
          onClick={() => alert("Open category browser")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              alert("Open category browser");
            }
          }}
        >
          <div className="cg-icon gray">
            <svg viewBox="0 0 24 24" className="cg-icon-svg" aria-hidden>
              <g fill="#9CA3AF">
                <circle cx="6" cy="6" r="2"></circle>
                <circle cx="12" cy="6" r="2"></circle>
                <circle cx="18" cy="6" r="2"></circle>
                <circle cx="6" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="18" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>
          <div className="cg-card-body">
            <h4 className="cg-title">Browse Category</h4>
            <p className="cg-sub" style={{ marginTop: 8 }}></p>
          </div>
        </div>
      </div>
    </div>
  );
}