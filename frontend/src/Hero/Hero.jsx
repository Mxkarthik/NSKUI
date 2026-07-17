import "./Hero.css";
import Navbar from "../Navbar/Navbar";

import building    from "../assets/hero/building.png";
import leftCloud   from "../assets/hero/leftcloud.png";
import rightCloud  from "../assets/hero/rightcloud.png";
import bottomCloud from "../assets/hero/bottomcloud.png";

export default function Hero() {
  return (
    <section
      className="hero"
      aria-label="Hero section"
    >

      {/* ── Background layer 1 — base sky gradient ── */}
      <div className="hero-bg"         aria-hidden="true" data-gsap="hero-bg" />

      {/* ── Background layer 2 — sunset glow + atm ── */}
      <div className="hero-glow"       aria-hidden="true" data-gsap="hero-glow" />

      {/* ── Background layer 3 — noise grain ────── */}
      <div className="hero-atmosphere" aria-hidden="true" data-gsap="hero-atmosphere" />

      {/* ── Navbar ──────────────────────────────────── */}
      <Navbar />

      {/* ── Hero content ────────────────────────────── */}
      <div className="hero-content" data-gsap="hero-content">

        <h1 className="hero-title" data-gsap="hero-title">
          Build What Moves You
        </h1>

        <p className="hero-description" data-gsap="hero-description">
          Complete Construction Solutions -{" "}
          <span className="hero-description-highlight">
            From Planning to Execution
          </span>
        </p>

        <a href="#projects" className="hero-cta" data-gsap="hero-cta" aria-label="Explore our projects">
          Explore Projects
          <span className="hero-cta-arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.2"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </a>
      </div>

      {/* ── Left cloud ──────────────────────────────── */}
      <img
        src={leftCloud}
        alt=""
        className="hero-cloud-left"
        aria-hidden="true"
        data-gsap="cloud-left"
      />

      {/* ── Right cloud ─────────────────────────────── */}
      <img
        src={rightCloud}
        alt=""
        className="hero-cloud-right"
        aria-hidden="true"
        data-gsap="cloud-right"
      />

      {/* ── Building ────────────────────────────────── */}
      <div className="hero-building-wrapper" data-gsap="hero-building">
        <img
          src={building}
          alt="NSK Construction flagship building"
          className="hero-building"
        />
      </div>

      {/* ── Bottom cloud (mist layer over building base) */}
      <img
        src={bottomCloud}
        alt=""
        className="hero-cloud-bottom"
        aria-hidden="true"
        data-gsap="cloud-bottom"
      />

    </section>
  );
}
