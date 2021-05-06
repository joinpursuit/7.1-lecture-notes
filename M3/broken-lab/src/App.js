import { Route, Switch } from "react-router-dom";
import Cats from "./Cats";
import "./App.css";

function App() {
  return (
    <div className="app">
      <main>
        <Switch>
          <Route path="/cat" component={Cats} />
          <Route render={() => <h1>404: Nothing to see here</h1>} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
