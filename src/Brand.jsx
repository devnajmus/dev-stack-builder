import React from "react";
import { Layers3 } from "lucide-react";
export default function Brand() {
  return (
    <a href="#home" className="brand" aria-label="Dev Stack home">
      <span className="brand-icon">
        <Layers3 size={23} />
      </span>
      <span className="gradient-text">Dev Stack</span>
    </a>
  );
}
