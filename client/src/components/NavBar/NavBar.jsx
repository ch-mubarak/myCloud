import "./NavBar.css"
import logo from "../../img/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default NavBar;
