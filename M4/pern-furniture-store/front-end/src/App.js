import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Show from "./Pages/Show";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/furniture">
            <Index />
          </Route>
          <Route path="/furniture/new">
            <New />
          </Route>
          <Route path="/furniture/:id">
            <Show />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
