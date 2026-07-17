import "./Hero.css";
import Navbar from "../Navbar/Navbar";

import background from "../assets/hero/background.png";
import building   from "../assets/hero/building.png";
import clouds     from "../assets/hero/clouds.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${background})` }}
      aria-label="Hero section"
    >

      {/* ── Navbar ──────────────────────────────────── */}
      <Navbar />

      {/* ── Hero content ────────────────────────────── */}
      <div className="hero-content" data-gsap="hero-content">

        <p className="hero-subtitle" data-gsap="hero-subtitle">
          Planning&nbsp;•&nbsp;Design&nbsp;•&nbsp;Construction&nbsp;•&nbsp;Execution
        </p>

        <h1 className="hero-title" data-gsap="hero-title">
          Build What Moves You
        </h1>

        <p className="hero-description" data-gsap="hero-description">
          Complete Construction Solutions — From Planning to Execution.
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

      {/* ── Cloud Left ──────────────────────────────── */}
      <img
        src={clouds}
        alt=""
        className="hero-cloud hero-cloud--left"
        aria-hidden="true"
        data-gsap="cloud-left"
      />

      {/* ── Cloud Right (mirrored) ───────────────────── */}
      <img
        src={clouds}
        alt=""
        className="hero-cloud hero-cloud--right"
        aria-hidden="true"
        data-gsap="cloud-right"
      />

      {/* ── Building ────────────────────────────────── */}
      <img
        src={building}
        alt="NSK Construction flagship building"
        className="hero-building"
        data-gsap="hero-building"
      />

    </section>
  );
}
