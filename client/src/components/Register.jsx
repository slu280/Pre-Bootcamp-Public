import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const history = useHistory()

  const register = (event) => {
    event.preventDefault();

    const newUser = { username, email, password, confirmPassword };

    axios
      .post("http://localhost:8000/api/register", newUser, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);

        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        history.push('/create')
      })
      .catch((err) => {
        console.log(err);

        setErrors(err.response.data.errors);
      });
      

  };

  return (
    <fieldset>
      <form onSubmit={register}>
          <h2>Sign Up</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
          {errors?.username && (
            <span className="error-message">
              {errors.username?.properties?.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors?.email && (
            <span className="error-message">
              {errors.email?.properties?.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="email"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {errors?.password && (
            <span className="error-message">
              {errors.password?.properties?.message}
            </span>
          )}
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
          {errors?.confirmPassword ? (
            <span className="error-message">
              {errors.confirmPassword?.properties?.message}
            </span>
          ) : (
            ""
          )}
        </div>

        <input type="submit" value="Sign Up" className="btn" />
      </form>
    </fieldset>
  );
};

export default Register;