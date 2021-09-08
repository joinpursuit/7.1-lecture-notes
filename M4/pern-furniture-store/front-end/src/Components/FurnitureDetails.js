import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { apiURL } from "../util/apiURL.js";
import axios from "axios";
const API = apiURL();

function FurnitureDetails() {
  const [furniturePiece, setFurniturePiece] = useState([]);

  const { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API}/furniture-pieces/${id}`)
      .then((response) => {
        setFurniturePiece(response.data.payload);
        console.log(furniturePiece);
      })
      .catch((e) => {
        console.error(e);
        history.push("/not-found");
      });
  }, []);

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${API}/furniture-pieces/${id}`);
      history.push("/furniture");
    } catch (e) {
      console.error(e);
    }
  };

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
          <button onClick={handleDelete}>Delete</button>
        </div>
      </article>
    </section>
  );
}

export default FurnitureDetails;
