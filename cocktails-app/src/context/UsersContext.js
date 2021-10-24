import { createContext, useReducer, useEffect } from "react";
import usersReducer from "./usersReducer";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  let usersLS = JSON.parse(localStorage.getItem("users"));
  if (!usersLS) {
    usersLS = [];
  }

  const initialState = {
    users: usersLS,
    authUser: {
      username: "",
      password: "",
      isAuth: false,
    },
  };

  const [userReducer, dispatch] = useReducer(usersReducer, initialState);

  const { users, authUser } = userReducer;

  const addUser = (user) => {
    dispatch({
      type: "SAVE_USER",
      payload: { ...user },
    });
  };
  const authentication = (loggin, userss = { users }) => {
    const { users } = userReducer;
    console.log(loggin.username, loggin.password);
    const userToLogin = users.find(
      (user) =>
        user.username === loggin.username && user.password === loggin.password
    );
    console.log(userToLogin);
    if (userToLogin) {
      alert(`Welcome ${loggin.username}`);

      addAuthUser(loggin);

      return true;
    }
  };

  const addAuthUser = (loggin) => {
    dispatch({
      type: "SAVE_AUTHUSER",
      payload: { ...loggin, isAuth: true },
    });
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UsersContext.Provider
      value={{ addUser, authentication, authUser, addAuthUser }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
