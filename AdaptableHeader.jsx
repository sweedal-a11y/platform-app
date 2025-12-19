import React from "react";
import PropTypes from "prop-types";
import "./AdaptableHeader.css";

export default function AdaptableHeader({
  badge = "Business Listing",
  title = "Profitable businesses ready for acquisition",
  subtitle =
    "Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.",
  buttonLabel = "View all listing",
  onButtonClick = () => {},
  image = null,
}) {
  return (
    <header className="ah-header">
      <div className="ah-inner">
        {/* Left content column */}
        <div className="ah-left">
          {badge && (
            <div className="ah-label">
              <span className="ah-label-text">{badge}</span>
            </div>
          )}

          <h1 className="ah-title">{title}</h1>

          {subtitle && <p className="ah-sub">{subtitle}</p>}

          {buttonLabel && (
            <div className="ah-cta-row">
              <button className="ah-btn ah-btn-outline" onClick={onButtonClick}>
                <span>{buttonLabel}</span>
                <svg
                  className="ah-btn-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="#152B5A"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Right visual column */}
        <div className="ah-right" aria-hidden="true">
          {image ? (
            <img src={image} alt="" className="ah-hero-image" />
          ) : (
            <div className="ah-card">
              <div className="ah-card-art" />
              <div className="ah-card-shadow" />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

AdaptableHeader.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  image: PropTypes.string,
};
