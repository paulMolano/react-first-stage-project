import { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import { Link, useHistory } from "react-router-dom";

export const RegisterForm = () => {
  const history = useHistory();

  const { addUser } = useContext(UsersContext);

  const [newuser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setNewUser({
      ...newuser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(newuser);
    setNewUser({
      email: "",
      username: "",
      password: "",
    });
    history.push("/");
  };

  const { email, username, password } = newuser;
  return (
    <>
      <h2 className="mt-5 mb-2 mr-2">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={email}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
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
          Register
        </button>
        <Link to="/"> Have you and account?</Link>
      </form>
    </>
  );
};
