import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Menu = () => {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">Searching App</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <NavLink to="/search"> Search </NavLink>
      </div>
    </div>
  );
};

export default Menu;
