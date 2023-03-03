import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <div>
      <button className="loginButton">
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default LoginButton;
