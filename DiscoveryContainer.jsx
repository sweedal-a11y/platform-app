// import React, { useState } from "react";
// import ProgressBarStaticHalf from "./ProgressBar";
// import "./DiscoveryContainer.css";
// import "./AIDiscoveryDropdown.css";

// export default function DiscoveryContainer() {
//   const [query, setQuery] = useState("");

//   const trending = [
//     { label: "AI & Machine Learning Startups", growth: "+156%" },
//     { label: "Renewable Energy Projects", growth: "+89%" },
//     { label: "Healthcare Technology", growth: "+67%" },
//   ];

//   // 🔍 Filter search results dynamically
//   const filtered = trending.filter((item) =>
//     item.label.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div className="discovery-container">
//       {/* Progress Bar Section */}
//       <div className="discovery-progress">
//         <ProgressBarStaticHalf />
//       </div>

//       {/* AI Discovery Dropdown */}
//       <div className="ai-dropdown">
//         <div className="ai-header">
//           <div className="ai-header-icon">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="#152B5A"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M12 3v18m9-9H3" />
//             </svg>
//           </div>
//           <div className="ai-header-content">
//             <h4 className="ai-header-title">AI-Powered Discovery</h4>
//             <p className="ai-header-sub">
//               Let our AI analyze market trends and suggest personalized
//               investment opportunities
//             </p>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="ai-searchbar">
//           <input
//             type="search"
//             placeholder="Search trending categories..."
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             className="ai-search-input"
//           />
//         </div>

//         {/* Divider */}
//         <hr className="ai-divider" />

//         {/* Trending Section */}
//         <div className="ai-trending">
//           <div className="ai-trending-header">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="#152B5A"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               style={{ marginRight: "6px" }}
//             >
//               <path d="M23 3L16.5 9.5L10.5 3L4 9.5V21H23V3Z" />
//             </svg>
//             TRENDING SEARCHES
//           </div>

//           <ul className="ai-trending-list">
//             {filtered.length > 0 ? (
//               filtered.map((item, i) => (
//                 <li key={i} className="ai-trending-item">
//                   <span className="ai-trending-label">{item.label}</span>
//                   <span className="ai-trending-growth">{item.growth}</span>
//                 </li>
//               ))
//             ) : (
//               <li className="ai-empty">No results found</li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
