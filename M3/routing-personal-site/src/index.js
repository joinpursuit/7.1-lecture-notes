import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// TODO: Use BrowserRouter Component to keep UI in sync with URL
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// <img />
// <div>CONTENT</div>
