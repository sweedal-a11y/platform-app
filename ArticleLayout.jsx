// src/components/ArticleLayout.jsx
import React from "react";
import "./ArticleLayout.css";

function SmallBadge({ children }) {
  return <div className="small-badge">{children}</div>;
}

function MetaRow() {
  return (
    <div className="meta-row">
      <div className="meta-item">
        <svg className="meta-icon" viewBox="0 0 16 16" aria-hidden>
          <circle cx="8" cy="8" r="7" stroke="none" fill="#43536D" />
        </svg>
        <span className="meta-text">March 15, 2025</span>
      </div>
      <div className="meta-item">
        <svg className="meta-icon" viewBox="0 0 16 16" aria-hidden>
          <rect x="3" y="3" width="10" height="10" rx="2" fill="#43536D" />
        </svg>
        <span className="meta-text">8 min</span>
      </div>
    </div>
  );
}

function RightListItem({ tag, title, img }) {
  const thumbStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <article className="right-article">
      <div className="right-thumb" style={thumbStyle} />
      <div className="right-body">
        <div className="right-badge-wrap">
          <div className="right-badge">{tag}</div>
        </div>
        <h4 className="right-title">{title}</h4>
        <button className="right-read">
          Read More <span className="arrow">›</span>
        </button>
      </div>
    </article>
  );
}

export default function ArticleLayout() {
  // Unsplash placeholders — feel free to swap with any other image URLs
  const heroImage =
    "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=1400&q=80";
const thumbs = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60", // founder stories
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60", // due diligence
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60", // ✅ new tech image
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60",   // founders
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60", // growth
];

  return (
    <section className="articles-outer">
      <div className="articles-inner">
        {/* LEFT: Big article card */}
        <div className="left-card">
          <div className="left-hero">
            <div
              className="left-hero-img"
              style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="left-hero-overlay" />
              <div className="left-hero-badge">
                <span className="left-hero-badge-text">Investment Strategy</span>
              </div>
            </div>
          </div>

          <div className="left-body">
            <h3 className="left-title">Invest in Founders Building the Future</h3>

            <p className="left-excerpt">
              Discover how the next generation of visionary entrepreneurs are
              reshaping industries and creating unprecedented investment
              opportunities. Learn what sets successful founders apart and how
              to identify the leaders who will define tomorrow's market
              landscape.
            </p>

            <div className="left-footer">
              <MetaRow />
              <button className="left-cta">
                Read More <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: list */}
        <aside className="right-col">
          <RightListItem
            tag="Founder Stories"
            title="A Journey That Taught Me Everything"
            img={thumbs[0]}
          />
          <RightListItem
            tag="Due Diligence"
            title="Identifying Moats And Defensibility"
            img={thumbs[1]}
          />
          <RightListItem
            tag="Technology"
            title="AI As An Investment Multiplier"
            img={thumbs[2]}
          />
          <RightListItem
            tag="Founders"
            title="Exclusive For New Founders"
            img={thumbs[3]}
          />
          <RightListItem
            tag="Growth"
            title="Growth Strategies Post-Funding"
            img={thumbs[4]}
          />

          <div className="view-all-wrap">
            <button className="view-all-btn">
              View All Articles <span className="view-all-arrow">→</span>
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}
