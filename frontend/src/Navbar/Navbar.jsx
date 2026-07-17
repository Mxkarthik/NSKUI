import { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home",     href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Primary navigation">
      <div className="navbar-inner">

        {/* ── Logo (wordmark) ──────────────────────── */}
        <a href="#home" className="navbar-logo" aria-label="NSK ETECH – home">
          NSK ETECH
        </a>

        {/* ── Desktop links ────────────────────────── */}
        <ul className="navbar-links" role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="navbar-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA button ───────────────────────────── */}
        <a href="tel:+1234567890" className="navbar-cta" aria-label="Call us">
          Call Us
        </a>

        {/* ── Hamburger (mobile) ───────────────────── */}
        <button
          className={`navbar-hamburger ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle mobile menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ── Mobile drawer ────────────────────────── */}
      <div className={`navbar-mobile-drawer ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="navbar-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="tel:+1234567890" className="navbar-mobile-cta">
              Call Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
