import "./Nav.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <Link to="/">
        <RocketLaunchIcon className="nav-logo" style={{ fontSize: 40 }} />{" "}
      </Link>
      <h1 className="nav-title">X Rockets</h1>
      <MenuIcon className="nav-menu" style={{ fontSize: 40 }} />
    </div>
  );
}

export default Nav;
