import React, { useState, useEffect, useRef } from "react";
import "./hero.css";

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("All");
  const [showResults, setShowResults] = useState(false);
  const [loading] = useState(false);
  const [apiResults] = useState([]);
  const resultsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resultsRef.current && !resultsRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="em-hero">
      {/* Floating pills */}
{/* Floating pills */}
<div className="em-hero-pill-wrap em-hero-pill-left">
  
  <div className="em-hero-pill-glow" />
     <svg width="34" height="65" viewBox="0 0 34 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7967 0.50235C20.7109 0.50235 20.6085 0.519402 20.5067 0.56485L20.5057 0.562897L5.84557 6.87247L5.83287 6.87833L5.8192 6.88419C5.81267 6.88745 5.80619 6.89145 5.79967 6.89493C5.48152 7.06467 5.39007 7.39812 5.40416 7.63321C5.41819 7.86645 5.55609 8.21373 5.93932 8.31485L5.93834 8.31583L11.3729 9.8002C12.07 9.99055 12.6269 10.5148 12.8602 11.1986L14.6786 16.5277L14.6815 16.5268C14.779 16.8393 15.0746 17.0512 15.3905 17.0512C15.7034 17.0511 15.9973 16.8434 16.0975 16.5356L16.0985 16.5365L21.5174 1.53555L21.5165 1.53458C21.666 1.13445 21.4417 0.732253 21.1122 0.577545L21.1131 0.575592C21.1054 0.57172 21.0965 0.569335 21.0887 0.565826C21.0839 0.563783 21.0799 0.559951 21.0751 0.558014L21.0741 0.559967C20.9763 0.518573 20.8792 0.5024 20.7967 0.50235Z" fill="#152B5A" stroke="#9AC6FF" stroke-width="1.00527"/>
<path d="M33.8859 59.4465C17.7621 59.4465 4.69127 46.3756 4.69127 30.2519C4.69127 20.814 9.16967 12.4221 16.1173 7.0853" stroke="url(#paint0_linear_1_382)" stroke-opacity="0.15" stroke-width="9.38252"/>
<defs>
<linearGradient id="paint0_linear_1_382" x1="12.8515" y1="8.12938" x2="21.7266" y2="59.4465" gradientUnits="userSpaceOnUse">
<stop stop-color="#152B5A"/>
<stop offset="1" stop-color="#458EFC" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

  <div className="em-hero-pill">
    
    <span className="em-hero-pill-icon">
      {/* replace with SVG */}
      ↑
    </span>
    <span>500+ Active Investors</span>
  </div>
</div>

<div className="em-hero-pill-wrap em-hero-pill-right">
  <div className="em-hero-pill-glow" />
  <svg width="61" height="65" viewBox="0 0 61 65" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.9044 57.5217C12.8341 57.4725 12.76 57.3998 12.7027 57.3041L12.7008 57.3052L4.31047 43.7282L4.30344 43.7161L4.2956 43.7035C4.29212 43.6971 4.28911 43.6901 4.28576 43.6835C4.1225 43.362 4.23884 43.0364 4.38521 42.8519C4.53048 42.6688 4.84263 42.4634 5.21455 42.6004L5.21431 42.5991L10.5175 44.5001C11.1977 44.744 11.9546 44.634 12.5379 44.2076L17.084 40.8851L17.0858 40.8876C17.345 40.6875 17.7086 40.6835 17.9674 40.8646C18.2237 41.0442 18.3453 41.3829 18.2508 41.6925L18.2522 41.6923L14.0874 57.0887L14.086 57.0889C13.979 57.5024 13.5646 57.7033 13.2059 57.641L13.2056 57.6432C13.1971 57.6419 13.1884 57.6387 13.18 57.6372C13.1749 57.6361 13.1694 57.6369 13.1643 57.6357L13.1647 57.6336C13.0608 57.6114 12.972 57.5689 12.9044 57.5217Z" fill="#FFC300" stroke="#FFE9A1" stroke-width="1.00527"/>
<path d="M57.4341 16.7445C44.2261 7.4967 26.022 10.7071 16.7742 23.9152C11.3611 31.6464 10.2164 41.0894 12.8468 49.446" stroke="url(#paint0_linear_1_454)" stroke-opacity="0.15" stroke-width="9.38252"/>
<defs>
<linearGradient id="paint0_linear_1_454" x1="10.7704" y1="46.7176" x2="47.4737" y2="9.77053" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFC300"/>
<stop offset="1" stop-color="#FFC300" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

  <div className="em-hero-pill">
    <span className="em-hero-pill-icon">
      {/* replace with SVG */}
      ✓
    </span>
    <span>Shariah Certified</span>
  </div>
</div>



      <h1 className="em-hero-title">
        Tokenize real-world <br /> opportunities
      </h1>

      <p className="em-hero-subtitle">
        Emireq empowers entrepreneurs to tokenize equity, revenue, and project
        shares — connecting them with investors across the globe.
      </p>

      {/* SEARCH */}
      <div className="em-hero-search-container">
        <div
          className="em-hero-search"
          onClick={() => setShowResults(true)}
        >
          <div className="em-hero-left">
            <div className="em-hero-icon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 17.5L13.8833 13.8833" stroke="#15289A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#15289A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

            <input
              className="em-hero-input"
              placeholder="Search startups, tokens, or investors..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setShowResults(true);
              }}
            />

           <div className="em-hero-select">
  <div
    className="em-hero-select-trigger"
    onClick={(e) => {
      e.stopPropagation();
      setOpen(!open);
    }}
  >
    {selectedOption} ▾
  </div>

  {open && (
    <div className="em-hero-options">
      {["All", "Startups", "Tokens", "Investors"].map((opt) => (
        <div
          key={opt}
          className="em-hero-option"
          onClick={() => {
            setSelectedOption(opt);
            setOpen(false);
          }}
        >
          {opt}
        </div>
      ))}
    </div>
  )}
</div>

          </div>

          <button className="em-hero-search-btn">Search</button>
        </div>

        {/* RESULTS */}
        {showResults && (
          <div className="search-results" ref={resultsRef}>
            {/* Discovery Card */}
            <div className="ai-discovery-card">
              <div className="ai-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3B5BDB"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
                </svg>
              </div>

              <div>
                <h3 className="ai-title">AI-Powered Discovery</h3>
                <p className="ai-description">
                  Let our AI analyze market trends and suggest personalized
                  investment opportunities
                </p>
              </div>
            </div>

            <div className="divider" />

            <div className="search-results-title">
              Trending Searches
            </div>

            {loading && (
              <div className="skeleton-wrapper">
                {[1, 2, 3, 4].map((i) => (
                  <div className="skeleton-line" key={i} />
                ))}
              </div>
            )}

            {!loading && apiResults.length === 0 && (
              <>
                <div className="trending-item">
                  <span>AI & Machine Learning Startups</span>
                  <span className="trend-positive">+156%</span>
                </div>
                <div className="trending-item">
                  <span>Renewable Energy Projects</span>
                  <span className="trend-positive">+89%</span>
                </div>
                <div className="trending-item">
                  <span>Healthcare Technology</span>
                  <span className="trend-positive">+67%</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
