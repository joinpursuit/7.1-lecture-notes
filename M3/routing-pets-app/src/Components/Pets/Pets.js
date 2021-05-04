import React from "react";
import { Route, Switch } from "react-router-dom";

import petAPI from "./petAPI";

import Pet from "./Pet";
import PetList from "./PetList";

class Pets extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
    };
  }

  // TODO: Use petAPI to populate component state with all pets
  async componentDidMount() {}

  // TODO: Use the route parameter :id to identify which pet to render.
  //       If no pet matches, render a 404 message.
  renderPet = (props) => {};

  // TODO: Render the complete list of pets
  renderPetList = () => {};

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/pets" render={this.renderPetList} />
          <Route path="/pets/:id" render={this.renderPet} />
        </Switch>
      </div>
    );
  }
}
export default Pets;
