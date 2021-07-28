import { useState } from "react";

function FurnitureDetails() {
  const [furniturePiece, setFurniturePiece] = useState({
    id: 1,
    name: "Googoobund",
    price: 13.0,
    description: "an amazing chair",
    is_flat_pack: true,
    year: 1943,
    model_number: 2384,
  }); // TODO: remove fake data, add empty [] in dynamic steps

  // TODO: destructure an id using hooks

  // TODO: use useEffect hook to get data from api

  // TODO: create a deleteHandler to send req to api

  return (
    <section className="FurnitureDetail">
      <article>
        <h4>{furniturePiece.name}</h4>
        <h5>{furniturePiece.price}</h5>
        <p>{furniturePiece.description}</p>
        <p>{furniturePiece.is_flat_pack}</p>
        <p>{furniturePiece.year}</p>
        <p>{furniturePiece.model_number}</p>
        <div>
          {/* TODO: add deleteHandler to delete button */}
          <button>Delete</button>
        </div>
      </article>
    </section>
  );
}

export default FurnitureDetails;
