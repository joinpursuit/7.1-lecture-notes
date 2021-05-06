import React, { Component } from "react";
import catsAPI from "./catsAPI";

class CatRandom extends Component {
  constructor() {
    super();
    this.state = {
      url: "",
    };
  }

  async newCat() {
    const catURL = await catsAPI.getCat();
    this.setState({ catURL });
  }

  componentDidMount() {
    this.newCat();
  }

  render() {
    const { url } = this.state;
    return (
      <div>
        <h1>CATRANDOM COMPONENT</h1>
        <button onClick={this.newCat}>Get new cat</button>
        <img style={{ height: "200px" }} src={url} alt="a random cat" />
      </div>
    );
  }
}

export default CatRandom;
