import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { stats } from "../../data/stats";
import "./HeroStats.css";

/**
 * HeroStats — Floating glassmorphism statistics panel.
 *
 * Positioned absolutely at the bottom of the Hero section so it
 * overlaps both the Hero and the next section (bottom: -55px).
 *
 * Data comes from src/data/stats.js.
 * When the CMS is live, replace that export with an API fetch —
 * this component requires zero changes.
 */
export default function HeroStats() {
  const panelRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const panel = panelRef.current;
    const cards = cardRefs.current;

    if (!panel || cards.length === 0) return;

    // ── Initial hidden state ────────────────────────────────────
    gsap.set(panel, { opacity: 0, y: 40 });
    gsap.set(cards, { opacity: 0, y: 24 });

    // ── Panel entrance ──────────────────────────────────────────
    const tl = gsap.timeline({ delay: 0.6 });

    tl.to(panel, {
      opacity: 1,
      y: 0,
      duration: 0.72,
      ease: "power3.out",
    });

    // ── Staggered stat cards ────────────────────────────────────
    tl.to(
      cards,
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.12,
        ease: "power2.out",
      },
      "-=0.38" // overlap with panel fade so it feels cohesive
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={panelRef}
      className="hero-stats"
      aria-label="Company statistics"
      role="region"
    >
      <ul className="hero-stats__list" role="list">
        {stats.map((stat, index) => (
          <li
            key={stat.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="hero-stats__item"
          >
            {/* Vertical divider — hidden on first item via CSS */}
            <span className="hero-stats__divider" aria-hidden="true" />

            <div className="hero-stats__card">
              <span className="hero-stats__value">{stat.value}</span>
              <span className="hero-stats__label">{stat.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
