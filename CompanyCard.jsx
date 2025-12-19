import React from "react";
import "./CompanyList.css";

const items = [
  {
    id: 1,
    title: "TechVenture AI",
    desc:
      "Revolutionary AI platform transforming business automation and decision-making processes.",
    category: "Technology",
    funding: "$5M",
    investors: "247",
    minEntry: "$10,000",
    // External placeholder image
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    title: "TechVenture AI",
    desc:
      "Revolutionary AI platform transforming business automation and decision-making processes.",
    category: "E-commerce",
    funding: "$5M",
    investors: "247",
    minEntry: "$10,000",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function CompanyList() {
  return (
    <div className="company-list-root">
      <div className="header">
        <div className="search-row">
          <div className="search-bar">
            <div className="search-icon" />
            <input
              className="search-input"
              placeholder="Search startups, tokens, or investors..."
              aria-label="Search"
            />
          </div>

          <div className="category-dropdown">
            <div className="dropdown-display">
              <span className="dropdown-text">All</span>
              <div className="dropdown-arrow" />
            </div>
          </div>
        </div>

        <div className="results-text">Showing {items.length} results</div>
      </div>

      <div className="cards-column">
        {items.map((it) => (
          <article className="company-card" key={it.id}>
            <div className="card-image-wrap">
              <img
                src={it.image}
                alt={it.title}
                className="card-image"
                loading="lazy"
              />
              <div className="category-badge">{it.category}</div>
            </div>

            <div className="card-content">
              <div className="content-top">
                <div className="title-row">
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <h3 className="company-title">{it.title}</h3>
                    <div className="verified-pill">Verified</div>
                  </div>

                  <div className="best-choice">Best Choice</div>
                </div>

                <p className="company-desc">{it.desc}</p>

                <div className="tag-row">
                  <span className="tag">AI</span>
                  <span className="tag">SaaS</span>
                  <span className="tag">B2B</span>
                </div>
              </div>

              <div className="card-bottom">
                <div className="stats">
                  <div className="stat-item">
                    <div className="stat-icon funding" />
                    <div className="stat-text">
                      <div className="stat-label">Funding</div>
                      <div className="stat-value">{it.funding}</div>
                    </div>
                  </div>

                  <div className="stat-item">
                    <div className="stat-icon investors" />
                    <div className="stat-text">
                      <div className="stat-label">Investors</div>
                      <div className="stat-value">{it.investors}</div>
                    </div>
                  </div>

                  <div className="stat-item">
                    <div className="stat-icon entry" />
                    <div className="stat-text">
                      <div className="stat-label">Min. Entry</div>
                      <div className="stat-value">{it.minEntry}</div>
                    </div>
                  </div>
                </div>

                <div className="card-actions">
                  <button className="btn secondary">View Details</button>
                  <button className="btn primary">Contact</button>
                </div>
              </div>
            </div>
          </article>
        ))}

        <div className="view-more">View More</div>
      </div>
    </div>
  );
}
