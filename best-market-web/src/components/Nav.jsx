import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navContainer">
      <img className="logoHome" src="img/logoHome.png" alt="Logo" />
      <LoginButton />
      <RegisterButton />
      <button className="shoppingCarButton">
        <Link to="/shoppingCart">Car</Link>
      </button>
    </div>
  );
};

export default Nav;
