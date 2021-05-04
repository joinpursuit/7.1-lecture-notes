import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// TODO: Wrap App in BrowserRouter component
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

  document.getElementById("root")
);
