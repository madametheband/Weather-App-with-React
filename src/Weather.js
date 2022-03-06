import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
export default function Weather() {
  return (
    <div class="container">
      <form class="city-search" id="city-search">
        <input
          style={{ width: 540 }}
          type="text"
          id="city-search-input"
          placeholder="Enter a city"
        />
        <button type="submit" class="btn btn-primary">
          Search
        </button>
        <button class="currentLocation" id="current-location">
          Current Location
        </button>
      </form>

      <h2>
        <span id="main-city"> San Francisco |</span>
        <span id="time"> 15:00 </span>|<span id="date"> June 14 2022</span>
      </h2>
      <div class="current-conditions">
        <div class="weather-conditions" id="conditions">
          Clear Skies
        </div>
        Humidity: <span id="humidity">75</span>% Wind:
        <span id="wind">.03</span>mph
      </div>

      <div class="row current-weather">
        <div class="col-3">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            id="icon"
            alt="Anything"
          />
        </div>
        <div class="col-3">
          <span class="changingTemp" id="city-temp">
            69
          </span>
          <span class="units">°F</span>
        </div>
      </div>
      <div class="weather-forecast" id="forecast"></div>
    </div>
  );
}
