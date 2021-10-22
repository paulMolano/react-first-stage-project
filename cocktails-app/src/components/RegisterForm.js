import { useContext, useState } from "react";
import { UsersContext } from "../context/UsersContext";
import { Link, useHistory } from "react-router-dom";
import { Spinner } from "../components/Spinner/Spinner";
import { Formik } from "formik";

export const RegisterForm = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const { addUser, addAuthUser } = useContext(UsersContext);

  /* const [newuser, setNewUser] = useState({
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

  const { email, username, password } = newuser; */
  return (
    <>
      <h2>Register</h2>
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
        }}
        validate={(values) => {
          let err = {};

          if (!values.username) {
            err.username = "Please enter your user name";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.username)) {
            err.username =
              "User name can only contain letters of the alphabe, and spaces";
          }

          if (!values.email) {
            err.email = "Please enter your email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              values.email
            )
          ) {
            err.email = "Email shoul have the format 'example@example.try'";
          }

          if (!values.password) {
            err.password = "Please enter your password";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
              values.password
            )
          ) {
            err.password =
              "Password should have minimum eight characters, at least one uppercase letter, one lowercase letter and one number";
          }

          return err;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          setLoading(true);
          addUser(values);
          setTimeout(() => {
            addAuthUser({
              username: values.username,
              password: values.password,
            });
            alert(`Welcome ${values.username}`);
            history.push("/home");

            setLoading(false);
          }, 2000);
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
          errors,
        }) => (
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
                onBlur={handleBlur}
                value={values.email}
                required
              />
              {touched.email && errors.email && (
                <div className="alert alert-danger">{errors.email}</div>
              )}
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
                onBlur={handleBlur}
                value={values.username}
                required
              />
              {touched.username && errors.username && (
                <div className="alert alert-danger">{errors.username}</div>
              )}
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
                onBlur={handleBlur}
                value={values.password}
                required
              />
              {touched.password && errors.password && (
                <div className="alert alert-danger">{errors.password}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <Link to="/"> Have you and account?</Link>
            {loading ? <Spinner /> : null}
          </form>
        )}
      </Formik>
    </>
  );
};
