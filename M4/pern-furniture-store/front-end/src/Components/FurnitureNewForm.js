import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";

const API = apiURL();

function FurnitureNewForm(props) {
  const [furniturePiece, setFurniturePiece] = useState({
    name: "",
    price: 0,
    description: "",
    is_flat_pack: 0,
    year: 0,
    model_number: 0,
  });
  let history = useHistory();

  // TODO: create a function to create new piece using axios to api
  const addFurniturePiece = (newFurniturePiece) => {
    axios
      .post(`${API}/furniture-pieces`, newFurniturePiece)
      .then(
        () => {
          history.push("/furniture");
        },
        (error) => console.error(error)
      )
      .catch((e) => console.warn("catch", e));
  };

  const handleTextChange = (event) => {
    setFurniturePiece({
      ...furniturePiece,
      [event.target.id]: event.target.value,
    });
    console.log(furniturePiece);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFurniturePiece(furniturePiece);
  };

  return (
    <section className="NewFurniturePiece">
      <form onSubmit={handleSubmit}>
        <label htmlFor="model_number">Model Number</label>
        <input
          id="model_number"
          type="number"
          value={furniturePiece.model_number}
          placeholder="0"
          onChange={handleTextChange}
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={furniturePiece.name}
          placeholder="Name of furniture piece"
          onChange={handleTextChange}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="TEXT"
          value={furniturePiece.description}
          placeholder="Describe the piece"
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={furniturePiece.price}
          placeholder="0"
          onChange={handleTextChange}
        />
        <label htmlFor="year">Year</label>
        <input
          id="year"
          type="number"
          value={furniturePiece.year}
          placeholder="0"
          onChange={handleTextChange}
        />
        <label htmlFor="is_flat_pack">Flat Pack?</label>
        <input
          id="is_flat_pack"
          type="checkbox"
          value={furniturePiece.is_flat_pack}
          onChange={handleTextChange}
          // TODO add checkbox change
        />
        <br />
        <input type="submit" />
      </form>
    </section>
  );
}

export default FurnitureNewForm;
