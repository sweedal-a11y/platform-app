import React from "react";
import hero from "./assets/hero.png";

import HeroSection from "./HeroSection.jsx";
import StatsOverview from "./StatsOverview.jsx";
import CategorySelector from "./CategorySelector.jsx";
import CryptoInsights from "./CryptoInsightsUpdate.jsx";
import PortfolioSectionUpdated from "./PortfolioSectionUpdated.jsx";
import BusinessListingUpdated from "./BusinessListingUpdated.jsx";
import BlogListingUpdated from "./BlogListingUpdated.jsx";
import Footer from "./Footer.jsx";

export default function HomeLanding() {
  return (
    <div className="no-horizontal-scroll">
      <div className="scale-wrapper">
        <div className="container">
          <HeroSection />
          <StatsOverview  />
          {/* <img src={hero} alt="Hero" className="hero-image" /> */}

          <CategorySelector />
          <CryptoInsights />
          <PortfolioSectionUpdated />
          <BusinessListingUpdated />
          <BlogListingUpdated />

          
          <Footer />
        </div>
      </div>
    </div>
  );
}
