import React from "react";
import { Plus, Check, Star } from "lucide-react";
export function TechIcon({ tech }) {
  return (
    <img
      className="tech-icon"
      src={tech.icon}
      alt=""
      width="38"
      height="38"
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = "/favicon.svg";
      }}
    />
  );
}
export default function TechnologyCard({ tech, added, onAdd }) {
  return (
    <article className="tech-card">
      <div className="card-top">
        <TechIcon tech={tech} />
        <span className={"badge badge-" + tech.category.toLowerCase()}>
          {tech.badge}
        </span>
      </div>
      <h3>{tech.name}</h3>
      <p>{tech.description}</p>
      <div className="card-meta">
        <span className="category">{tech.category}</span>
        <span className="rating">
          <Star size={13} fill="currentColor" /> {tech.rating.toFixed(1)}
        </span>
      </div>
      <div className="difficulty">
        <span
          className={
            tech.difficulty === "Beginner-Friendly" ? "level beginner" : "level"
          }
        />
        {tech.difficulty}
      </div>
      <button
        className={added ? "add-button added" : "add-button"}
        disabled={added}
        onClick={() => onAdd(tech)}
      >
        {added ? <Check size={16} /> : <Plus size={16} />}{" "}
        {added ? "Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

