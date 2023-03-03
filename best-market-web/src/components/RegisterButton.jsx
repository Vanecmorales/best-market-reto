import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <div>
      <button className="registerButton">
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default RegisterButton;
