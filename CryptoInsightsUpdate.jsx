import React from "react";
import "./CryptoInsightsUpdate.css";

/* Inline small icons (kept simple & crisp) */
function IconSettings() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" stroke="#6B7280" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15a7.94 7.94 0 0 0 .2-1 7.94 7.94 0 0 0-.2-1l2-1.5-2-3.5-2.4.7a8.05 8.05 0 0 0-1.7-.98L14 4h-4l-.3 2.7c-.62.27-1.2.63-1.7 1.07L5.6 7.2 3.6 10.7l2 1.5c-.12.33-.2.67-.2 1 0 .34.07.67.2 1l-2 1.5 2 3.5 2.4-.7c.5.44 1.08.8 1.7 1.07L10 20h4l.3-2.7c.62-.27 1.2-.63 1.7-1.07l2.4.7 2-3.5-2-1.5z" stroke="#E5E7EB" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    </svg>
  );
}
function IconBell() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 17H9a3 3 0 0 1-3-3V11c0-3 2-5 5-6V4a2 2 0 1 1 4 0v1c3 1 5 3 5 6v3a3 3 0 0 1-3 3z" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* Small inline sparkline svgs as encoded data URIs */
const greenSpark = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='70'><polyline points='0,50 30,38 60,45 90,28 120,36 150,18 180,26 200,10' stroke='%2300A562' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>`
);
const redSpark = encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='70'><polyline points='0,18 30,30 60,24 90,40 120,33 150,50 180,46 200,56' stroke='%23FF4B4B' stroke-width='4' fill='none' stroke-linecap='round' stroke-linejoin='round'/></svg>`
);

export default function CryptoInsights() {
  return (
    <main className="ci-page">
      {/* top content */}
      <header className="ci-top">
        <div className="ci-chip">Crypto Insights</div>
        <h1 className="ci-title">Insights into the Crypto Landscape</h1>
        <p className="ci-sub">
          Stay updated with real-time market data, trends, and analysis across
          the cryptocurrency ecosystem
        </p>

        <div className="ci-stats" role="list">
          <div className="ci-stat" role="listitem">
            <div className="ci-stat-value">41.5%</div>
            <div className="ci-stat-label">Bitcoin Dominance</div>
          </div>

          <div className="ci-stat" role="listitem">
            <div className="ci-stat-value">$2.5 T</div>
            <div className="ci-stat-label">Total Market Capitalization</div>
          </div>

          <div className="ci-stat" role="listitem">
            <div className="ci-stat-value">$300 B</div>
            <div className="ci-stat-label">24-Hour Trading Volume</div>
          </div>
        </div>
      </header>

      {/* the centered dashboard board with violet side background */}
      <section className="ci-board-wrap">
        <div className="ci-board">

          {/* header controls */}
          <div className="ci-board-header">
            <div className="ci-board-title">Investment Portfolio Dashboard</div>

            <div className="ci-controls">
              <button className="ci-ghost" aria-label="settings"><IconSettings /></button>

              <label className="ci-search" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M21 21l-4.35-4.35" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="5" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <input aria-label="Search" placeholder="Search" />
              </label>

              <button className="ci-ghost" aria-label="notifications"><IconBell /></button>

              <button className="ci-ghost" aria-label="menu">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="#9CA3AF" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>

              <img className="ci-avatar" src="/assets/arab1.png" alt="profile" />
            </div>
          </div>

          {/* top cards (3 fixed columns) */}
          <div className="ci-cards" role="list">

            {/* Card 1 */}
            <article className="ci-card" role="listitem" aria-label="Aurivox">
              <div className="ci-card-header">
                <div className="ci-card-left">
                  <div className="ci-token" style={{background:'#FFEFD2'}} aria-hidden>
       <svg
  width="44"
  height="44"
  viewBox="0 0 44 44"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="44" height="44" rx="12" fill="#FFF2D9" />
  <path
    d="M22 6 L33 15 L29 31 L22 38 L15 31 L11 15 Z"
    fill="#F59E0B"
  />
  <path
    d="M22 12 L28 17 L26 26 L22 29 L18 26 L16 17 Z"
    fill="#FFD58A"
  />
  <path
    d="M19 30 L22 35 L25 30 Z"
    fill="#FFFFFF"
  />
</svg>


                  </div>
                  <div>
                    <div className="ci-token-title">Aurivox</div>
                    <div className="ci-token-sub">AVX</div>
                  </div>
                </div>

                <div className="ci-badge positive">+14.67%</div>
              </div>

              <div className="ci-card-body">
                <div className="ci-price">$23,738</div>
                <img className="ci-spark" src={`data:image/svg+xml;utf8,${greenSpark}`} alt="" aria-hidden />
              </div>

              <div className="ci-card-foot">
                <div className="ci-date">Tuesday, 14th October 2025</div>
                <a className="ci-link" href="#!">$23,738</a>
              </div>
            </article>

            {/* Card 2 */}
            <article className="ci-card" role="listitem" aria-label="Eminar">
              <div className="ci-card-header">
                <div className="ci-card-left">
                  <div className="ci-token" aria-hidden>
 <svg
  width="44"
  height="44"
  viewBox="0 0 44 44"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Outer hexagon */}
  <path
    d="M22 3
       L35 11
       L35 33
       L22 41
       L9 33
       L9 11
       Z"
    fill="#6366F1"
  />

  {/* Inner hexagon */}
  <path
    d="M22 8
       L31 14
       L31 30
       L22 36
       L13 30
       L13 14
       Z"
    fill="#C7D2FE"
  />

  {/* Center circle */}
  <circle
    cx="22"
    cy="22"
    r="6"
    fill="#6366F1"
  />
</svg>

</div>
                  <div>
                    <div className="ci-token-title">Eminar</div>
                    <div className="ci-token-sub">EMN</div>
                  </div>
                </div>

                <div className="ci-badge negative">-14.67%</div>
              </div>

              <div className="ci-card-body">
                <div className="ci-price">$23,738</div>
                <img className="ci-spark" src={`data:image/svg+xml;utf8,${redSpark}`} alt="" aria-hidden />
              </div>

              <div className="ci-card-foot">
                <div className="ci-date">Tuesday, 14th October 2025</div>
                <a className="ci-link" href="#!">$23,738</a>
              </div>
            </article>

            {/* Card 3 */}
            <article className="ci-card" role="listitem" aria-label="Xenara">
              <div className="ci-card-header">
                <div className="ci-card-left">
                  <div className="ci-token" style={{background:'#DEFCEB'}} aria-hidden>
                   <svg
  width="44"
  height="44"
  viewBox="0 0 44 44"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Outer rounded square */}
  <rect
    x="2"
    y="2"
    width="40"
    height="40"
    rx="10"
    fill="#10B981"
  />

  {/* Inner lighter area */}
  <rect
    x="6"
    y="6"
    width="32"
    height="32"
    rx="8"
    fill="#A7F3D0"
  />

  {/* Checkmark */}
  <path
    d="M14 22
       L20 28
       L30 16"
    stroke="#10B981"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />
</svg>

                  </div>
                  <div>
                    <div className="ci-token-title">Xenara</div>
                    <div className="ci-token-sub">XNR</div>
                  </div>
                </div>

                <div className="ci-badge positive">+14.67%</div>
              </div>

              <div className="ci-card-body">
                <div className="ci-price">$23,738</div>
                <img className="ci-spark" src={`data:image/svg+xml;utf8,${greenSpark}`} alt="" aria-hidden />
              </div>

              <div className="ci-card-foot">
                <div className="ci-date">Tuesday, 14th October 2025</div>
                <a className="ci-link" href="#!">$23,738</a>
              </div>
            </article>

          </div>

          {/* market overview table */}
          <div className="ci-table-wrap" aria-labelledby="market-overview">
            <div className="ci-table-head">
              
              <div>
                <div className="ci-table-title" id="market-overview">Market Overview</div>
                <div className="ci-table-sub">Comprehensive token statistics trading information</div>
              </div>
            </div>

            <div className="ci-table-wrapper">
              <table className="ci-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Change(%)</th>
                    <th>Change($)</th>
                    <th>Marketcap</th>
                    <th>Trade</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
  <td className="ci-token-cell">
    <div className="ci-token" style={{ width: "44px", height: "44px" }}>
      <svg
  width="44"
  height="44"
  viewBox="0 0 44 44"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect width="44" height="44" rx="12" fill="#FFF2D9" />
  <path
    d="M22 6 L33 15 L29 31 L22 38 L15 31 L11 15 Z"
    fill="#F59E0B"
  />
  <path
    d="M22 12 L28 17 L26 26 L22 29 L18 26 L16 17 Z"
    fill="#FFD58A"
  />
  <path
    d="M19 30 L22 35 L25 30 Z"
    fill="#FFFFFF"
  />
</svg>

    </div>

    <div>
      <div className="ci-token-name">Aurivox</div>
      <div className="ci-token-symbol">AVX</div>
    </div>
  </td>

  <td>$200,000</td>
  <td className="ci-negative"><span className="ci-arrow">↘</span> -1.32%</td>
  <td className="ci-negative"><span className="ci-arrow">↘</span> $0.057</td>
  <td>$213.8M</td>
  <td><button className="ci-trade">Trade</button></td>
</tr>

                  <tr>
  <td className="ci-token-cell">
    <div className="ci-token" style={{ width: "48px", height: "48px" }}>
    <svg
  width="44"
  height="44"
  viewBox="0 0 44 44"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Outer hexagon */}
  <path
    d="M22 3
       L35 11
       L35 33
       L22 41
       L9 33
       L9 11
       Z"
    fill="#6366F1"
  />

  {/* Inner hexagon */}
  <path
    d="M22 8
       L31 14
       L31 30
       L22 36
       L13 30
       L13 14
       Z"
    fill="#C7D2FE"
  />

  {/* Center circle */}
  <circle
    cx="22"
    cy="22"
    r="6"
    fill="#6366F1"
  />
</svg>

    </div>

    <div>
      <div className="ci-token-name">Eminar</div>
      <div className="ci-token-symbol">EMN</div>
    </div>
  </td>

  <td>$200,000</td>
  <td className="ci-positive"><span className="ci-arrow">↗</span> +1.32%</td>
  <td className="ci-positive"><span className="ci-arrow">↗</span> $0.146</td>
  <td>$245.8M</td>
  <td><button className="ci-trade">Trade</button></td>
</tr>
<tr>
  <td className="ci-token-cell">
    <div className="ci-token" style={{ width: "48px", height: "48px" }}>
      <svg
  width="44"
  height="44"
  viewBox="0 0 44 44"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Outer rounded square */}
  <rect
    x="2"
    y="2"
    width="40"
    height="40"
    rx="10"
    fill="#10B981"
  />

  {/* Inner lighter area */}
  <rect
    x="6"
    y="6"
    width="32"
    height="32"
    rx="8"
    fill="#A7F3D0"
  />

  {/* Checkmark */}
  <path
    d="M14 22
       L20 28
       L30 16"
    stroke="#10B981"
    strokeWidth="5"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="none"
  />
</svg>

    </div>

    <div>
      <div className="ci-token-name">Xenara</div>
      <div className="ci-token-symbol">XNR</div>
    </div>
  </td>

  <td>$200,000</td>
  <td className="ci-positive"><span className="ci-arrow">↗</span> +1.32%</td>
  <td className="ci-positive"><span className="ci-arrow">↗</span> $0.450</td>
  <td>$245.8M</td>
  <td><button className="ci-trade">Trade</button></td>
</tr>

                </tbody>
              </table>
            </div>

            <div className="ci-footnote">Market data is updated in real-time. Prices are for reference only and may vary across exchanges.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
