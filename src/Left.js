import React from "react";
import "./left.css";

export default function Left() {
  return (
    <div className="left">
      <span className="city" id="place">
        Tokyo
      </span>
      <br />
      <span className="time">
        <small>15:45</small>
      </span>
      <span className="date">18 April</span>
    </div>
  );
}
