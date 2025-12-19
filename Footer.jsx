import { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import logo from "/assets/logo.png";
import "./Footer.css";

export default function Footer() {
  /* =========================
     NEWSLETTER STATE
  ========================= */
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubscribe = () => {
    if (!email) {
      setError("Email is required");
      setSuccess(false);
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);

    // 🔗 API integration goes here
    console.log("Subscribed:", email);
  };

  return (
    <footer className="em-footer">
      {/* TOP GRID */}
      <div className="em-footer-grid">
        {/* LOGO + ABOUT */}
        <div className="em-footer-brand">
          <img src={logo} alt="EMIREQ logo" className="em-footer-logo" />

          <p className="em-footer-desc">
            Commodo nec mi id ullamcorper vitae augue neque dis.
          </p>

          <div className="em-footer-socials">
            <SocialIcon icon={<FaTwitter size={16} />} />
            <SocialIcon icon={<FaFacebookF size={16} />} />
            <SocialIcon icon={<FaLinkedinIn size={16} />} />
            <SocialIcon icon={<FaYoutube size={16} />} />
            <SocialIcon icon={<FaInstagram size={16} />} />
          </div>
        </div>

        <FooterColumn
          title="Products"
          links={["Tokenization", "Marketplace", "How it works", "Startups"]}
        />

        <FooterColumn
          title="Resources"
          links={["Learn & Explore", "Insights", "Investment guide", "FAQ"]}
        />

        <FooterColumn
          title="Company"
          links={["About us", "Careers", "Press & Media", "Blog", "Contact Us"]}
        />

        <FooterColumn
          title="Support"
          links={["Help Center", "Security & Trust", "Disclaimer"]}
        />
      </div>

      {/* DIVIDER */}
      <div className="em-footer-divider" />

      {/* NEWSLETTER */}
      <div className="em-footer-newsletter">
        <div>
          <h3>Stay in the loop</h3>
          <p>
            Subscribe to our newsletter for the latest crypto insights and market
            updates.
          </p>
        </div>

        <div className="em-footer-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
              setSuccess(false);
            }}
          />

          <button onClick={handleSubscribe}>Subscribe</button>
        </div>

        {/* FEEDBACK */}
        {error && <p className="em-footer-error">{error}</p>}
        {success && (
          <p className="em-footer-success">
            Thanks for subscribing 
          </p>
        )}
      </div>

      {/* BOTTOM */}
      <div className="em-footer-bottom">
        <span>© 2025 EMIREQ. All rights reserved.</span>

        <div className="em-footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------- HELPERS ---------- */

function SocialIcon({ icon }) {
  return <div className="em-footer-social">{icon}</div>;
}

function FooterColumn({ title, links }) {
  return (
    <div className="em-footer-col">
      <h4>{title}</h4>
      {links.map((link) => (
        <p key={link}>{link}</p>
      ))}
    </div>
  );
}
