import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "./Brand";
export default function Navbar({ onInfo }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container nav">
        <button
          className="menu icon-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <Brand />
        <nav
          id="navigation"
          className={open ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {["Home", "Technologies", "Projects", "About", "Contact"].map(
            (label) => (
              <a
                key={label}
                href={
                  ["Home", "Technologies"].includes(label)
                    ? "#" + label.toLowerCase()
                    : "#" + label.toLowerCase()
                }
                onClick={(e) => {
                  setOpen(false);
                  if (!["Home", "Technologies"].includes(label)) {
                    e.preventDefault();
                    onInfo(label);
                  }
                }}
              >
                {label}
              </a>
            ),
          )}
        </nav>
        <div className="auth">
          <button className="text-button" onClick={() => onInfo("Sign In")}>
            Sign In
          </button>
          <button className="primary pill" onClick={() => onInfo("Sign Up")}>
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

