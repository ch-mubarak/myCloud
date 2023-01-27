import "./NavBar.css";
import logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state?.authReducer?.authData?.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      {user && (
        <ul>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
