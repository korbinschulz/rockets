import "./Nav.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import MenuOptions from "./MenuOptions.js";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      return (
        <div className="menu">
          <MenuOptions showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      );
    }
  };

  return (
    <div className="nav">
      <Link to="/">
        <RocketLaunchIcon className="nav-logo" style={{ fontSize: 40 }} />{" "}
      </Link>
      <h1 className="nav-title">X Rockets</h1>
      <div className="nav-shell">
        <MenuIcon
          className="nav-menu"
          style={{ fontSize: 40 }}
          onClick={toggleMenu}
        />
        {
          <div>
            {showMenu ? (
              <div className="menu-open">
                <MenuOptions />
              </div>
            ) : (
              ""
            )}
          </div>
        }
      </div>
    </div>
  );
}

export default Nav;
