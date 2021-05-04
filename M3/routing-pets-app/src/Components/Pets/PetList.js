import React from "react";
import { Link } from "react-router-dom";

// The PetList iterates over the array of pets and creates
// a link to each one's individual page.
const PetList = ({ pets }) => (
  <ul>
    {pets.map((pet) => (
      <li>
        <Link to={`/pets/${pet.id}`}>
          {pet.id} : {pet.name}
        </Link>
      </li>
    ))}
  </ul>
);

export default PetList;
