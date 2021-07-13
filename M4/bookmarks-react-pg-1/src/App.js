import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./Pages/Index";

// We're trying to connect to our backend
// we know it's available on a url like
//     http://localhost:3003

// okay, great. How do I make an http request?

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Bookmarks app</h1>
      <Switch>
        <Route exact path="/bookmarks">
          <Index />
        </Route>
        <Route></Route>
      </Switch>
    </div>
  );
}

export default App;
