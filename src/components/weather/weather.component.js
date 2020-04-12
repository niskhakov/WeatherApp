import React from "react";

import { ReactComponent as Therm } from "../../assets/thermometer.svg";
import { ReactComponent as Press } from "../../assets/meter.svg";
import { ReactComponent as Winds } from "../../assets/wind.svg";

import "./weather.styles.scss";

function Weather(props) {
  const { temp, pressure, wind_speed } = props.data;
  return (
    <div className="weather-widget">
      <div className="item">
        <div className="weather-logo-container">
          <Therm className="weather-info-logo" />
        </div>
        <div>
          <strong>Temperature:</strong> {temp}°C
        </div>
      </div>

      <div className="item">
        <div className="weather-logo-container">
          <Press className="weather-info-logo" />
        </div>
        <div>
          <strong>Pressure:</strong> {pressure} mm Hg
        </div>
      </div>

      <div className="item">
        <div className="weather-logo-container">
          <Winds className="weather-info-logo" />
        </div>
        <div>
          <strong>Wind speed:</strong> {wind_speed} m/s
        </div>
      </div>
    </div>
  );
}

export default Weather;
