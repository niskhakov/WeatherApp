export default class Main {
  static processResponseData({ main: { temp, pressure }, wind: { speed } }) {
    console.log(temp, pressure, speed);
    return {
      temp: Math.round(temp - 273.3),
      pressure: Math.round(pressure / 1.333),
      wind_speed: speed,
    };
  }
}
