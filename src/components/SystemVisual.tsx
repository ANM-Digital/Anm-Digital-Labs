import React from "react";

export function SystemVisual() {
  return (
    <div
      className="system-visual"
      role="img"
      aria-label="ANM Digital product delivery system: strategy, engineering, and applied intelligence moving from concept to production"
    >
      <div className="orbital o1"></div>
      <div className="orbital o2"></div>
      <div className="core">
        <span>ANM</span>
        <b>DIGITAL</b>
        <small>SYSTEM / ACTIVE</small>
      </div>
      <div className="node n1">
        <i></i>
        <span>PRODUCT</span>
        <b>Strategy</b>
      </div>
      <div className="node n2">
        <i></i>
        <span>ENGINEERING</span>
        <b>Build</b>
      </div>
      <div className="node n3">
        <i></i>
        <span>INTELLIGENCE</span>
        <b>AI Systems</b>
      </div>
      <div className="metric">
        <small>DELIVERY ARCHITECTURE</small>
        <b>Concept → Production</b>
        <span>
          <i></i> Operational · 2026
        </span>
      </div>
    </div>
  );
}
