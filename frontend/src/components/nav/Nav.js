import "./Nav.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  return (
    <div className="nav">
      <RocketLaunchIcon className="nav-logo" style={{ fontSize: 40 }} />
      <h1 className="nav-title">X Rockets</h1>
      <MenuIcon className="nav-menu" style={{ fontSize: 40 }} />
    </div>
  );
}

export default Nav;
