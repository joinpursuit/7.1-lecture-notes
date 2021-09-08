import { useDispatch, useSelector } from "react-redux";
import darkRoom from "../assets/darkRoom.jpg";
import litRoom from "../assets/litRoom.jpg";
import { toggle } from "../actions/lightActions";
import "./Room.css";

const Room = () => {
  const dispatch = useDispatch();
  const isOn = useSelector((state) => state.lights);
  console.log("redux store:", isOn);

  return (
    <div className="Room">
      <img src={isOn ? litRoom : darkRoom} alt="A dark living room" />
      <button
        onClick={() => {
          dispatch(toggle());
        }}
      ></button>
    </div>
  );
};

export default Room;
