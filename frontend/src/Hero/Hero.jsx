import "./Hero.css";
import building from "../assets/hero/building.png";

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-subtitle">
          Premium Construction Company
        </p>

        <h1 className="hero-title">
          Building Tomorrow,<br />
          Today.
        </h1>

        <p className="hero-description">
          Crafting modern spaces with quality,
          precision and innovation.
        </p>

        <button className="hero-button">
          Explore Projects
        </button>

      </div>

      <div className="hero-building">

        <img
          src={building}
          alt="Building"
        />

      </div>

    </section>
  );
}