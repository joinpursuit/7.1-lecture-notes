import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import { Link, Route } from "react-router-dom";

const AboutEsay = (props) => {
  return <div>About Esay</div>;
};

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/about">About Me</Link>
      </nav>
      <h1>Routing Example App</h1>
      <h3>(See README for details)</h3>
      {/* TODO: Add routes for Home, About, and Skills */}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/about/esay" component={AboutEsay} />
      <Route path="/skills" component={Skills} />
    </div>
  );
};

export default App;
