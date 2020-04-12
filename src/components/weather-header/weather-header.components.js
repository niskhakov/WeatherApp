import React from "react";

import { ReactComponent as Refresh } from "../../assets/arrows.svg";

import "./weather-header.styles.scss";

const WeatherHeader = ({ changeCity, city }) => {
  const clickHandle = (event) => {
    let res = prompt("Enter city name");
    if (!res) {
      alert("Input is invalid, city has not changed");
    } else {
      changeCity(res);
    }
  };
  return (
    <div className="weather-title">
      <h1>
        Current Weather information in{" "}
        <span className="city" onClick={clickHandle}>
          {city()}
        </span>
      </h1>
      <div className="refresh">
        <div className="refresh-container-logo">
          <Refresh className="refresh-logo" onClick={clickHandle} />
        </div>
      </div>
    </div>
  );
};

export default WeatherHeader;
