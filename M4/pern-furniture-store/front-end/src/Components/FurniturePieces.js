import { useState } from "react";
import Furniture from "./Furniture";

function FurniturePieces(props) {
  const [furniturePieces, setFurniturePieces] = useState([
    // TODO: don't forget to delete this after creating axios call!!!
    {
      id: 1,
      name: "Googoobund",
      price: 13.0,
    },
  ]);

  // TODO: some way to update the state (useEffect)

  return (
    <section className="FurniturePieces">
      <article>
        {furniturePieces.map((furniturePiece) => {
          return (
            <Furniture
              key={furniturePiece.id}
              furniturePiece={furniturePiece}
            />
          );
        })}
      </article>
    </section>
  );
}

export default FurniturePieces;
