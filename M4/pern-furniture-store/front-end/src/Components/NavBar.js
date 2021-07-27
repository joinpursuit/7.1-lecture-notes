import React from "react";
import { NavLink } from "react-router-dom";
import couchImage from "../assets/couch.jpeg";

function NavBar() {
  return (
    <nav className="Nav">
      <NavLink to="/furniture">
        <h1>Furniture Inventory</h1>
      </NavLink>
      <div>
        <img src={couchImage} alt="leather couch" />
      </div>
      <NavLink to="/furniture/new">
        <button>Add to Inventory</button>
      </NavLink>
    </nav>
  );
}

export default NavBar;
