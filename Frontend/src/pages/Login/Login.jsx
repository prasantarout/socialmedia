import React, { useContext, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
const Login = () => {
  const { Login } = useContext(AuthContext);

  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const navigate=useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    navigate("/");
    try {
      await Login(input);
    } catch (err) {
      console.log(err,">>>>>>>>>>>>>>>.");
      setError(err?.response?.data);
    }
  };


  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero
            eveniet facilis ea repudiandae id sed, eaque rerum nisi et facere
            consectetur. Aspernatur enim, ipsum rem maiores ratione id at?
          </p>
          <span>Don't you have an account ?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {error && <p style={{color:'red'}}>{error}</p>}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
