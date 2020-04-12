import React, { Component } from "react";
import axios from "axios";

import Utils from "../../utils/main";
import Weather from "../../components/weather/weather.component";
import WeatherHeader from "../../components/weather-header/weather-header.components";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const { changeCity, city } = props;
    this.state = {
      isLoading: true,
      data: null,
      currentCity: null,
      haveError: false,
      changeCity,
      city,
    };
  }

  async getData() {
    try {
      const response = await axios.get(
        "https://ajze5qg5zg.execute-api.eu-central-1.amazonaws.com/v1/",
        {
          params: {
            q: this.state.city(),
          },
        }
      );

      console.log("👉 Returned data:", response);
      this.setState({
        data: Utils.processResponseData(response.data),
        currentCity: this.state.city(),
        isLoading: false,
        haveError: false,
      });
    } catch (err) {
      console.log(`😱 Axios request failed: ${err}`);
      this.setState({ haveError: true, currentCity: this.state.city() });
    }
  }

  async componentDidMount() {
    await this.getData();
  }

  render() {
    let weatherWidget = this.state.isLoading ? (
      "Loading data"
    ) : (
      <Weather data={this.state.data} />
    );
    if (this.state.currentCity !== this.state.city()) {
      this.getData();
      weatherWidget = "Loading data";
    }
    if (this.state.haveError) {
      weatherWidget = "City doesn't exist in Database or network error";
    }
    return (
      <div>
        <WeatherHeader
          changeCity={this.state.changeCity}
          city={this.state.city}
        />
        {weatherWidget}
      </div>
    );
  }
}
