import React from "react";
import { Route, Switch, Link } from "react-router-dom";

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
  async componentDidMount() {
    const allPets = petAPI.getAll();
    this.setState({
      pets: allPets,
    });
  }

  // TODO: Use the route parameter :id to identify which pet to render.
  //       If no pet matches, render a 404 message.
  renderPet = (props) => {
    const id = props.match.params.id;
    const { pets } = this.state;
    const pet = pets.find((pet) => pet.id === id);

    if (!pet) {
      return <h1>404: No Such Pet</h1>;
    }

    return <Pet name={pet.name} species={pet.species} />;
  };

  // TODO: Render the complete list of pets
  renderPetList = () => {
    const { pets } = this.state;
    return <PetList pets={pets} />;
  };

  renderRandomNum = (props) => {
    const num = props.match.params.num;
    return <h1>You have requested {num} pet images</h1>;
  };

  render() {
    return (
      <div>
        <h1>PETS COMPONENT</h1>
        <Switch>
          <Route exact path="/pets" render={this.renderPetList} />
          <Route path="/pets/random/:num" render={this.renderRandomNum} />
          <Route path="/pets/:id" render={this.renderPet} />
        </Switch>
      </div>
    );
  }
}
export default Pets;
