import React, { useRef } from "react";
import "./PortfolioSectionUpdated.css";

export default function PortfolioSectionUpdated() {
  const cardsRef = useRef(null);

  const scroll = (direction) => {
    const cardWidth = 220 + 26; // card width + gap
    cardsRef.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="startup-section" aria-labelledby="startup-portfolio">
      <div className="startup-inner">

        {/* HEADER ROW */}
        <div className="startup-header">
          <div className="left-head">
            <div className="badge-row">
              <div className="small-arrow">↗</div>
              <div className="badge-pill">PORTFOLIO</div>
            </div>
            <h1 className="startup-title">
              We Invest in <span className="accent">Founders</span>
              <br />
              Building the Future
            </h1>
          </div>

          <div className="header-sub-row">
            <p className="lead-copy">
              Join successful startups that have raised funding through our platform.
              From pre-seed to Series A, we support founders at every stage.
            </p>

            <button className="outline-btn" aria-label="Learn more">
              Learn More <span className="outline-arrow">→</span>
            </button>
          </div>
        </div>

        {/* MAIN ROW */}
        <div className="portfolio-row">
          {/* Left yellow card */}
          <div className="invest-card">
            <div className="invest-top">
              <div className="avatar-stack">
                <img className="avatar" alt="Investor 1" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=80&h=80&q=60"/>
                <img className="avatar" alt="Investor 2" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=60"/>
                <img className="avatar" alt="Investor 3" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=80&h=80&q=60"/>
                <img className="avatar" alt="Investor 4" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&h=80&q=60"/>
              </div>
              <div className="invest-note">+750 Active Investors</div>
            </div>

            <h3 className="invest-title">750+ Members Invest On This Project</h3>
            <p className="invest-desc">
              Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia viverra orci diam.
            </p>

            <div className="feature-badges">
              <div className="pill dark">⚡ Scalable Solutions</div>
              <div className="pill dark">⏱ 24/7 Support</div>
              <div className="pill dark">✨ Automation Features</div>
            </div>

            <div className="invest-cta">
              <button className="contact-btn">
                Contact <span className="contact-arrow">→</span>
              </button>
            </div>
          </div>

          {/* Right scrollable cards */}
          <div className="cards-wrapper">
            <button className="scroll-btn left" onClick={() => scroll(-1)}>←</button>

            <div className="cards-view">
              <div className="cards-col" ref={cardsRef}>
                {/* 5 cards */}
                <article className="image-card">
                  <div className="card-image" style={{backgroundImage:`url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60')`}}/>
                  <div className="card-overlay">
                    <div className="card-top">
                      <div className="card-tag">Growth</div>
                      <div className="card-circle">↗</div>
                    </div>
                    <div className="card-bottom">
                      <div className="card-title">Scaled SaaS</div>
                    </div>
                  </div>
                </article>

                <article className="image-card">
                  <div className="card-image" style={{backgroundImage:`url('https://images.unsplash.com/photo-1519337265831-281ec6cc8514?auto=format&fit=crop&w=1200&q=60')`}}/>
                  <div className="card-overlay">
                    <div className="card-top">
                      <div className="card-tag light">Scaling</div>
                      <div className="card-circle">↗</div>
                    </div>
                    <div className="card-bottom">
                      <div className="card-title">Tripled Revenue</div>
                    </div>
                  </div>
                </article>

                <article className="image-card">
                  <div className="card-image" style={{backgroundImage:`url('https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=60')`}}/>
                  <div className="card-overlay">
                    <div className="card-top">
                      <div className="card-tag orange">Pre-Seed</div>
                      <div className="card-circle">↗</div>
                    </div>
                    <div className="card-bottom">
                      <div className="card-title">Build MVP</div>
                    </div>
                  </div>
                </article>

                <article className="image-card">
                  <div className="card-image" style={{backgroundImage:`url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=60')`}}/>
                  <div className="card-overlay">
                    <div className="card-top">
                      <div className="card-tag orange">Series A</div>
                      <div className="card-circle">↗</div>
                    </div>
                    <div className="card-bottom">
                      <div className="card-title">Next Gen Platform</div>
                    </div>
                  </div>
                </article>

                <article className="image-card">
                  <div className="card-image" style={{backgroundImage:`url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60')`}}/>
                  <div className="card-overlay">
                    <div className="card-top">
                      <div className="card-tag light">Innovation</div>
                      <div className="card-circle">↗</div>
                    </div>
                    <div className="card-bottom">
                      <div className="card-title">AI Startup</div>
                    </div>
                  </div>
                </article>

              </div>
            </div>

            <button className="scroll-btn right" onClick={() => scroll(1)}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
