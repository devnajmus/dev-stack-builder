import React from "react";
import { Layers3, X, Trash2, Plus } from "lucide-react";
import { TechIcon } from "./TechnologyCard";
export default function StackPanel({ stack, onRemove, onClear }) {
  return (
    <aside className="stack-panel" aria-labelledby="stack-title">
      <div className="stack-heading">
        <h3 id="stack-title">
          <Layers3 size={19} /> Your Stack
        </h3>
        <span className="count">{stack.length}</span>
      </div>
      <p className="stack-caption" aria-live="polite">
        {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
        Selected
      </p>
      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">
            <Layers3 size={31} />
            <Plus size={13} />
          </div>
          <h4>Your stack starts here</h4>
          <p>
            Choose technologies that fit your project. Your picks will appear
            here.
          </p>
        </div>
      ) : (
        <ul className="stack-items">
          {stack.map((tech) => (
            <li key={tech.id}>
              <TechIcon tech={tech} />
              <div>
                <strong>{tech.name}</strong>
                <span>{tech.category}</span>
              </div>
              <button
                className="icon-button"
                onClick={() => onRemove(tech.id)}
                aria-label={"Remove " + tech.name}
              >
                <X size={17} />
              </button>
            </li>
          ))}
        </ul>
      )}
      <button className="remove-all" disabled={!stack.length} onClick={onClear}>
        <Trash2 size={15} /> Remove All
      </button>
      <p className="stack-tip">A thoughtful stack. A stronger start.</p>
    </aside>
  );
}

