import React, { Component } from "react";

import "./about.styles.scss";

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1>About Weather.app</h1>
        <p>
          This service is developed as test project and intended to be reviewed
          by people from Yandex.Cloud School
        </p>
        <p>
          Weather.app extensively relies on{" "}
          <a href="https://reactjs.org" className="link">
            React JS
          </a>{" "}
          framework and uses{" "}
          <a href="https://openweathermap.org/" className="link">
            OpenWeatherMap API
          </a>{" "}
          to provide you with accurate weather information.{" "}
          <a href="https://aws.amazon.com/" className="link">
            AWS Lambda
          </a>{" "}
          was used to hide API key and control the number of API calls to
          OpenWeatherMap.
        </p>
        More credits:
        <ul className="credits">
          <li>
            Awesome fonts by{" "}
            <a href="https://fonts.google.com/" className="link">
              Google Fonts
            </a>
          </li>
          <li>
            Icons provided by{" "}
            <a href="https://www.flaticon.com/" className="link">
              Flaticon
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
