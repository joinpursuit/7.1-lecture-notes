import axios from "axios";
import { useState, useEffect } from "react";
import Furniture from "./Furniture";
import { apiURL } from "../util/apiURL.js";

const API = apiURL();

function FurniturePieces(props) {
  const [furniturePieces, setFurniturePieces] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/furniture-pieces`)
      .then(
        (response) => {
          setFurniturePieces(response.data.payload);
        },
        (error) => console.log("get", error)
      )
      .catch((e) => console.warn("catch", e));
  }, []);

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
