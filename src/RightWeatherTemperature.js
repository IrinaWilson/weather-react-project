import React from "react";
import "./RightWeatherTemperature.css";

export default function RightWeatherTemperature() {
  return (
    <div className="right weatherTemperature">
      <img src="#" alt="" className="bigCoin" id="icon" />
      <div className="temperature" id="temp">
        18
      </div>
      <small>
        <span className="units">
          <a href="/" className="active" id="celsius-link">
            °C
          </a>
          |
          <a href="/" id="fahrenheit-link">
            °F
          </a>
        </span>
      </small>
      <br />
      <div className="description">
        <ul>
          <li className="wind" id="wSpeed">
            24
          </li>
          <li className="humidity" id="humidityT">
            10
          </li>
          <li className="weather-conditions" id="conditions">
            Clear
          </li>
        </ul>
      </div>
    </div>
  );
}
