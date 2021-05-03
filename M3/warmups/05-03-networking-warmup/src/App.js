// TODO:
//   - complete getRandomCountryInfo and check your App is working
//     by running `npm start`
//   - Bonus: add a button that updates the country card with a
//     new random country

import { Component } from "react";
import axios from "axios";
import "./App.css";

// This function returns a random 3-letter country code
import randomCountry from "./data/countryCodes";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countryInfo: {},
    };
  }

  // getRandomCountryInfo should make a request to
  // `https://restcountries.eu/rest/v2/alpha/${randomCountryCode}`
  // Then getRandomCountryInfo should update state.countryInfo with
  // data
  getRandomCountryInfo = async () => {};

  componentDidMount() {
    this.getRandomCountryInfo();
  }

  render() {
    const { name, population, flag } = this.state.countryInfo;
    return (
      <div class="App">
        <h1>Warmup: Complete the Random Country App</h1>
        <h3>(The card below should display info about a random country)</h3>
        <div class="country-card">
          <h3>{name}</h3>
          <img src={flag} alt={`flag of ${name}`} />
          <p>Population: {population}</p>
        </div>
      </div>
    );
  }
}

export default App;
