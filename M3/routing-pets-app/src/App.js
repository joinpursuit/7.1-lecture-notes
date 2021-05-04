import { Link, Route } from "react-router-dom";
import Home from "./Components/Home";
import Pets from "./Components/Pets/Pets";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {"  "}
        <Link to="/pets">Pets</Link>
      </nav>
      {/* Use Switch component for EXCLUSIVE routing */}
      <Route path="/" component={Home} />
      <Route path="/pets" component={Pets} />
    </div>
  );
};

export default App;
