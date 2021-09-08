import { useDispatch } from "react-redux";
import darkRoom from "../assets/darkRoom.jpg";
import litRoom from "../assets/litRoom.jpg";
import "./Room.css";

const Room = () => {
  return (
    <div className="Room">
      <img src={darkRoom} alt="A dark living room" />
      <button></button>
    </div>
  );
};

export default Room;
