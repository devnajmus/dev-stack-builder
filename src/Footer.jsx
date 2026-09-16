import React from "react";
import Brand from "./Brand";
export default function Footer({ onInfo }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>
              Curated technologies for developers
              <br />
              building their next big thing.
            </p>
            <div className="social">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter ↗
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>
          {Object.entries({
            Product: ["Home", "Technologies", "Projects"],
            Company: ["About", "Contact"],
            Legal: ["Privacy Policy", "Terms of Service"],
          }).map(([group, links]) => (
            <div key={group}>
              <h4>{group}</h4>
              {links.map((label) => (
                <a
                  key={label}
                  href={
                    label === "Home"
                      ? "#home"
                      : label === "Technologies"
                        ? "#technologies"
                        : "#"
                  }
                  onClick={(e) => {
                    if (!["Home", "Technologies"].includes(label)) {
                      e.preventDefault();
                      onInfo(label);
                    }
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Dev Stack. All rights reserved.
          </span>
          <div>
            <button onClick={() => onInfo("Privacy Policy")}>Privacy</button>
            <button onClick={() => onInfo("Terms of Service")}>Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

