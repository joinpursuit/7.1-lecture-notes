import React from "react";
import { Link } from "react-router-dom";

const Pet = ({ name, species }) => (
  <div>
    <div>
      <h1>{name}</h1>
      <h2> Species: {species}</h2>
      <Link to="/pets">Back</Link>
    </div>
  </div>
);

export default Pet;
