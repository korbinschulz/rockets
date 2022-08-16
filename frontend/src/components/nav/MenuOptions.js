import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./navItems";
import "./MenuOptions.css";

function MenuOptions() {
  return (
    <div className="menu">
      <ul className="menu-options">
        <li>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/add">
            <p>Add Rocket</p>
          </NavLink>
        </li>
        {navItems.map((item) => (
          <li>
            <NavLink key={item.text} to={item.path}>
              <p>{item.text}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuOptions;
