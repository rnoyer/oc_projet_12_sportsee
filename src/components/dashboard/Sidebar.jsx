import "./Sidebar.scss";
import { Link } from "react-router";
import NavIcon from "./NavIcon";
import zen from "/src/assets/icons/zen.svg";
import swim from "/src/assets/icons/swim.svg";
import bike from "/src/assets/icons/bike.svg";
import alter from "/src/assets/icons/alter.svg";

function Sidebar() {

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <Link reloadDocument to="/dashboard/12">
          <NavIcon iconPath={zen} iconSize="small" />
        </Link>
        <Link reloadDocument to="/dashboard/18">
          <NavIcon iconPath={swim} iconSize="small" />
        </Link>
        <Link to="#">
          <NavIcon iconPath={bike} iconSize="small" />
        </Link>
        <Link to="#">
          <NavIcon iconPath={alter} iconSize="small" />
        </Link>
      </nav>
      <p className="vertical-text">Copiryght, SportSee 2025</p>
    </div>
  );
}

export default Sidebar;
