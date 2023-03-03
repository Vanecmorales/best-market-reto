import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";


const Nav = () => {
  return <div className="navContainer">
    <img className="logoHome" src="img/logoHome.png" alt="Logo"/>
    <LoginButton/>
    <RegisterButton/>
    
  </div>;
};

export default Nav;
