import { useState } from "react";

function FurnitureNewForm(props) {
  const [furniturePiece, setFurniturePiece] = useState({
    name: "",
    price: null,
    description: "",
    is_flat_pack: null,
    year: null,
    model_number: null,
  });

  // TODO: create a function to create new piece using axios to api

  // TODO: add a text change handler

  // TODO: add submit handler
  // TODO: call a function to add the furniture piece,
  // addFurniturePiece

  return (
    <section className="NewFurniturePiece">
      {/* TODO: add submit handler to form */}
      <form>
        <label htmlFor="model_number">Model Number</label>
        <input
          id="model_number"
          type="number"
          value={furniturePiece.model_number}
          placeholder="0"
          // TODO: on change text handler onChange={}
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={furniturePiece.name}
          placeholder="Name of furniture piece"
          // TODO: on change text handler onChange={}
        />
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="TEXT"
          value={furniturePiece.description}
          placeholder="Describe the piece"
          // TODO: on change text handler onChange={}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={furniturePiece.price}
          placeholder="0"
          // TODO: on change text handler onChange={}
        />
        <label htmlFor="year">Year</label>
        <input
          id="year"
          type="number"
          value={furniturePiece.year}
          placeholder="0"
          // TODO: on change text handler onChange={}
        />
        <label htmlFor="is_flat_pack">Flat Pack?</label>
        <input
          id="is_flat_pack"
          type="checkbox"
          value={furniturePiece.is_flat_pack}
          // TODO: on change text handler onChange={}
        />
        <br />
        <input type="submit" />
      </form>
    </section>
  );
}

export default FurnitureNewForm;
