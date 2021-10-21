import React, { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import { Link, useHistory } from "react-router-dom";

export const LoginForm = () => {
  const { authentication } = useContext(UsersContext);

  const [loginUser, setLoginUser] = useState({
    username: "",
    password: "",
    isAuth: false,
  });

  const handleChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value,
    });
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    authentication(loginUser)
      ? history.push("/home")
      : alert("Incorrect password or user");

    setLoginUser({
      username: "",

      password: "",
    });
  };

  const { username, password } = loginUser;
  return (
    <>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label" required>
            Username
          </label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={handleChange}
            value={username}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log in
        </button>
        <Link to="/register"> New account? Click me</Link>
      </form>
    </>
  );
};
