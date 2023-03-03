import { Link } from "react-router-dom";

const RegisterButton = () => {
  return (
    <div>
      <button>
        <Link to="/register">Register</Link>
      </button>
    </div>
  );
};

export default RegisterButton;
