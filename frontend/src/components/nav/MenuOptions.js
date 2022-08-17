import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuOptions.css";

function MenuOptions({ setShowMenu }) {
  const handleClick = (e) => {
    setShowMenu(false);
  };

  return (
    <div className="menu">
      <ul className="menu-options">
        <li>
          <NavLink className="option" to="/" onClick={(e) => handleClick(e)}>
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink className="option" to="/add" onClick={(e) => handleClick(e)}>
            <p>Add Rockets</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="option"
            to="/view"
            onClick={(e) => handleClick(e)}
          >
            <p>View Rockets</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuOptions;
