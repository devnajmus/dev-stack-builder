import React from "react";
import { ArrowRight } from "lucide-react";
export default function Hero({ onInfo }) {
  return (
    <section className="container hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="eyebrow">
          <span /> YOUR NEXT IDEA STARTS HERE
        </div>
        <h1 id="hero-title">
          Build Your Ideal
          <br />
          <span className="gradient-text">Development Stack</span>
        </h1>
        <p>
          Great projects start with the right tools. Explore frontend, backend,
          and everything in between. Build a stack that brings your next idea to
          life.
        </p>
        <div className="hero-actions">
          <a className="primary" href="#technologies">
            Explore Technologies <ArrowRight size={17} />
          </a>
          <button className="outline" onClick={() => onInfo("About")}>
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-art">
        <img
          src="/banner-stack.png"
          width="420"
          height="420"
          alt="Glowing layers of a development stack, from data to user interface"
        />
      </div>
    </section>
  );
}

