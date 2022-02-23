import React from "react";

import "./Cities.css";

export default function Cities() {
  return (
    <div className="Cities">
      <div className="subhead">
        <div className="row">
          <div className="col">
            <a href="" id="warsaw-city">
              Warsaw
            </a>
          </div>
          <div className="col">
            <a href="" id="asuncion-city">
              Asunción
            </a>
          </div>
          <div className="col">
            <a href="" id="seoul-city">
              Seoul
            </a>
          </div>
          <div className="col">
            <a href="" id="seattle-city">
              Seattle
            </a>
          </div>
          <div className="col">
            <a href="" id="washingtondc-city">
              Washington, DC
            </a>
          </div>
          <div className="col-3.5">
            <form className="location-form" id="search-form">
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
              />
              <input type="submit" id="search-city" value="🔍" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
