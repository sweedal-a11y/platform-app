import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiChevronRight,
  FiCalendar,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";
import "./BlogListingUpdated.css";

const mainArticle = {
  id: 1,
  image:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&q=80&w=1400",
  tag: "Investment Strategy",
  title: "Invest in Founders Building the Future",
  excerpt:
    "Discover how the next generation of visionary entrepreneurs are reshaping industries and creating unprecedented investment opportunities. Learn what sets successful founders apart and how to identify the leaders who will define tomorrow's market landscape.",
  date: "March 15, 2025",
  readTime: "8 min",
};

const sideArticles = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&q=80&w=800",
    tag: "Founder Stories",
    title: "A Journey That Taught Me Everything",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&q=80&w=800",
    tag: "Due Diligence",
    title: "Identifying Moats And Defensibility",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&q=80&w=800",
    tag: "Technology",
    title: "AI As An Investment Multiplier",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&q=80&w=800",
    tag: "Founders",
    title: "Exclusive For New Founders",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&q=80&w=800",
    tag: "Growth",
    title: "Growth Strategies Post-Funding",
  },
];

export default function BlogListingUpdated() {
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

    // 🔗 API call can be added here
    console.log("Subscribed:", email);
  };

  return (
    <div className="blog-page">
      {/* ===== HEADER ===== */}
      <div className="blog-top">
        <div className="blog-top-left">
          <span className="top-tag">OUR BLOG</span>
          <h1 className="blog-title">
            We Invest In Founders <br />
            Building the <span className="accent">Future</span>
          </h1>
        </div>

        <div className="blog-top-right">
          <p className="blog-sub">
            Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
            viverra orci diam. Nibh est vitae suspendisse parturient sed lorem eu.
          </p>

          <button className="ghost-btn">
            All News & Blogs <FiChevronRight />
          </button>
        </div>
      </div>

      {/* ===== FILTER PILLS ===== */}
      <div className="blog-filters">
        <div className="filter-pill active">All</div>
        <div className="filter-pill">Funding</div>
        <div className="filter-pill">Investment</div>
        <div className="filter-pill">Technology</div>
        <div className="filter-pill">Strategy</div>
        <div className="filter-pill">Trends</div>
      </div>

      {/* ===== MAIN CONTENT ROW ===== */}
      <div className="blog-content-row">
        {/* LEFT MAIN ARTICLE */}
        <motion.article
          className="main-article"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="main-image-wrap">
            <img src={mainArticle.image} alt={mainArticle.title} />
            <div className="image-badge">{mainArticle.tag}</div>
          </div>

          <div className="main-body">
            <h2 className="main-heading">{mainArticle.title}</h2>
            <p className="main-excerpt">{mainArticle.excerpt}</p>

            <div className="main-meta-row">
              <div className="meta-left">
                <div className="meta-item">
                  <FiCalendar /> {mainArticle.date}
                </div>
                <div className="meta-item">
                  <FiClock /> {mainArticle.readTime}
                </div>
              </div>

              <button className="cta-btn">
                Read More <FiArrowRight />
              </button>
            </div>
          </div>
        </motion.article>

        {/* RIGHT SIDEBAR */}
        <aside className="sidebar">
          {sideArticles.map((a) => (
            <motion.div
              key={a.id}
              className="side-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img className="side-thumb" src={a.image} alt={a.title} />

              <div className="side-meta">
                <div className="side-tag">{a.tag}</div>
                <div className="side-title">{a.title}</div>
                <a className="side-read" href="#read">
                  Read More <FiChevronRight />
                </a>
              </div>
            </motion.div>
          ))}

          <button className="sidebar-cta">
            View All Articles <FiChevronRight />
          </button>
        </aside>
      </div>

      {/* ===== NEWSLETTER CTA ===== */}
      <section className="newsletter-section">
        <div className="newsletter-box">
          <div className="newsletter-left">
            <h3>Never Miss an Insight</h3>
            <p>
              Join 10,000+ investors and founders getting weekly insights on
              startups, funding, and market trends.
            </p>
          </div>

          <div className="newsletter-right">
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

            {error && <p className="newsletter-error">{error}</p>}
            {success && (
              <p className="newsletter-success">
                Subscribed successfully
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
