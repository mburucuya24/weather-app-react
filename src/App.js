import React from "react";
import Cities from "./Cities.js";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <hr />
            <h1>The Weather</h1>
            <hr />
            <Cities />
            <br />
            <Weather />
            <br />
            <hr />
            <Forecast />
          </div>
        </div>
      </div>
      <p>
        <a
          href="https://github.com/mburucuya24/weather-app-react"
          target="_blank"
        >
          Open-source code
        </a>
        by Pauline Hwang
      </p>
    </div>
  );
}

export default App;
