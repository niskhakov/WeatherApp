import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import AboutPage from "./pages/about/about.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCity: "Moscow",
      api: null,
    };
  }

  render() {
    const cityFunc = (city) => {
      this.setState({ currentCity: city });
      console.log(this.state);
    };
    return (
      <Router className="app">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage
                {...props}
                changeCity={cityFunc}
                city={() => this.state.currentCity}
              />
            )}
          />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
