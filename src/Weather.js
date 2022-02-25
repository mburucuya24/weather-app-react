import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function showTemperature(response) {
    setMessage(
      <div className="WeatherResult">
        <div className="row">
          <div className="col-3">
            <h4 id="city">{city}</h4>
            <h6>
              <span id="date"></span>
            </h6>
          </div>
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                alt={response.data.weather[0].description}
                id="icon"
              />
              <h5 id="description">{response.data.weather[0].description}</h5>
              <h4>
                <span className="temperature" id="temperature">
                  {Math.round(response.data.main.temp)}
                </span>
                <span className="units">
                  <a href="foo" id="celsius-link" className="active">
                    °C
                  </a>{" "}
                  |
                  <a href="foo" id="fahrenheit-link">
                    °F
                  </a>
                </span>
              </h4>
            </div>
          </div>
          <div className="col-3">
            <div className="weather-details">
              <h6>
                <span id="today-high-temp">
                  {Math.round(response.data.main.temp_max)}
                </span>
                ° |
                <span className="low-temp">
                  <span id="today-low-temp">
                    {Math.round(response.data.main.temp_min)}
                  </span>
                  °
                </span>
              </h6>
              <h6>
                Humidity:{" "}
                <span id="humidity">{response.data.main.humidity}</span>%
              </h6>
              <h6>
                Wind:{" "}
                <span id="wind-speed">
                  {Math.round(response.data.wind.speed)}
                </span>
                <span id="speed-units"> km/h</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "fa76215f0cf93568bc4f8d5fad72485f";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Cities">
      <div className="subhead">
        <div className="row">
          <div className="col">
            <a href="foo" id="warsaw-city">
              Warsaw
            </a>
          </div>
          <div className="col">
            <a href="foo" id="asuncion-city">
              Asunción
            </a>
          </div>
          <div className="col">
            <a href="foo" id="seoul-city">
              Seoul
            </a>
          </div>
          <div className="col">
            <a href="foo" id="seattle-city">
              Seattle
            </a>
          </div>
          <div className="col">
            <a href="foo" id="washingtondc-city">
              Washington, DC
            </a>
          </div>
          <div className="col-3.5">
            <form
              className="location-form"
              id="search-form"
              onSubmit={handleSubmit}
            >
              <button
                type="button"
                className="geolocation-button"
                id="request-geolocation"
              >
                📍
              </button>
              <input
                type="text"
                id="city-input"
                placeholder="Enter a city"
                autoComplete="off"
                onChange={updateCity}
              />
              <input type="submit" id="search-city" value="🔍" />
            </form>
          </div>
        </div>
      </div>
      <br />
      {message}
      <br />
      <hr />
    </div>
  );
}
