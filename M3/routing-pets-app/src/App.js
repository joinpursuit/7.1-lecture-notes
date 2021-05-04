import { Link, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Pets from "./Components/Pets/Pets";

const NotFound = () => {
  return <h1>404: Not Found</h1>;
};

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        {"  "}
        <Link to="/pets">Pets</Link>
      </nav>
      {/* Use Switch component for EXCLUSIVE routing */}
      <Switch>
        <Route path="/pets" component={Pets} />
        <Route path="/skills" component={() => <h1>SKILLS</h1>}></Route>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
