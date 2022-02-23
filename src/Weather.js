import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-3">
          <h4 id="city">Warsaw</h4>
          <h6>
            <span id="date"></span>
          </h6>
        </div>
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src="" alt="" id="icon" />
            <h5 id="description">Cloudy</h5>
            <h4>
              <span className="temperature" id="temperature"></span>
              <span className="units">
                <a href="#" id="celsius-link" className="active">
                  °C
                </a>{" "}
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </h4>
          </div>
        </div>
        <div className="col-3">
          <div className="weather-details">
            <h6>
              <span id="today-high-temp"></span>° |
              <span className="low-temp">
                <span id="today-low-temp"></span>°
              </span>
            </h6>
            <h6>
              Humidity: <span id="humidity">56</span>%
            </h6>
            <h6>
              Wind: <span id="wind-speed"></span>
              <span id="speed-units">km/h</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
