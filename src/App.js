import React from "react";
import Weather from "./Weather.js";
import Forecast from "./Forecast.js";
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
            <Weather />
            <Forecast />
          </div>
        </div>
      </div>
      <p>
        <a
          href="https://github.com/mburucuya24/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Pauline Hwang
      </p>
    </div>
  );
}

export default App;
