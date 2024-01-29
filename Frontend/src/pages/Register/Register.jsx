import React, { useState } from "react";
import "./Rgister.scss";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/auth/register", input);
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  console.log(input, "dsadkjasda");
  return (
    <div className="Register">
      <div className="card">
        <div className="left">
          <h1>STX MEDIA.</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, vero
            eveniet facilis ea repudiandae id sed, eaque rerum nisi et facere
            consectetur. Aspernatur enim, ipsum rem maiores ratione id at?
          </p>
          <span>Do you have an account ?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
