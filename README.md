# WeatherApp 

## Project Info

1. Weather Project based on React and AWS Lambda(Node JS)
2. Website
3. Server response is OpenWeatherAPI JSON object (), then it reduced only to JS object {temp, pressure, wind_speed} and this information is displayed in weather.component. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Video Demonstration

[![Video Demonstration](https://static-niskhakov.s3.eu-central-1.amazonaws.com/github/screencast-weatherapp.png)](https://vimeo.com/407118963 "Video Demonstration - Click to Watch!")

## Live Demo

Live demo is available at https://weatherapp.iskhakov.now.sh/

## Work steps

1. Users go to the website
2. React App do network request to Lambda Function (by default the city is Moscow)
3. Lambda Function do network request to OpenWeatherMap with specified API key
4. Lambda function return OWM response to React App
5. React App processes the data and displays weather.component

## How to run
You must have `nodejs` and `yarn` installed

```
git clone https://github.com/niskhakov/WeatherApp.git weatherapp
cd weatherapp
yarn install
yarn start
```

## Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

### `yarn build`

### `yarn eject`
