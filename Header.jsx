import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./header.css";
import logo from "./assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: "Marketplace", path: "/marketplace" },
    { label: "Tokenize", path: "/tokenize" },
    { label: "Investors", path: "/investors" },
    { label: "Events", path: "/events" },
    { label: "About", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-inner">

        {/* LOGO */}
        <motion.div
          className="logo-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.35 }}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer", transform: "none" }}
        >
          <img src={logo} alt="emireq logo" className="logo" />
        </motion.div>

        {/* NAVIGATION LINKS */}
        <motion.nav
          className="nav-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22, duration: 0.4 }}
          style={{ transform: "none" }}
        >
          {navItems.map(({ label, path }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 240 }}
              style={{ transformOrigin: "center" }}
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {label}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>

        {/* BUTTONS */}
        <motion.div
          className="btn-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.35 }}
          style={{ transform: "none" }}
        >
          <motion.button
            className="btn-startups"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => navigate("/startups/register")}
          >
            Startups
          </motion.button>

          <motion.button
            className="btn-investors"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => navigate("/investors/register")}
          >
            Investors
          </motion.button>
        </motion.div>

      </div>
    </header>
  );
};

export default Header;

