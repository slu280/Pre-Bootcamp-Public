import React, { useState } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
const Login = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory()

  const login = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/login",
        { username, email, password },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        history.push('/dashboard')
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(err.response.data.msg);
      });
      

  };

  return (
    <fieldset>
      <form onSubmit={login}>
          <h2>Login</h2>
          <a href="/register">Not a member? Register</a>
      <p className="form-group">
      <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </p>
     
        <p className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </p>
        <p className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="email"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </p>
        <input type="submit" value="Sign In" className="btn" />
        <p className="error-message">{errorMessage ? errorMessage : ""}</p>
      </form>
    </fieldset>
  );
};

export default Login;