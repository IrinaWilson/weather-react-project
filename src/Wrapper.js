import React from "react";
import Left from "./Left";
import RightWeatherTemperature from "./RightWeatherTemperature";
import "./Wrapper.css";

export default function Wrapper() {
  return (
    <div className="Wrapper">
      <Left />
      <RightWeatherTemperature />
    </div>
  );
}
