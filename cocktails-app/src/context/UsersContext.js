import { createContext, useReducer, useState, useEffect } from "react";
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

  /* const [users, setUsers] = useState(usersLS);
  const [authUser, setAuthUser] = useState({
    username: "",
    password: "",
    isAuth: false,
  }); */

  const [userReducer, dispatch] = useReducer(usersReducer, initialState);

  const { users, authUser } = userReducer;
  console.log(userReducer, users, authUser);
  const addUser = (newUser) => {
    dispatch({
      type: "SAVE_USER",
      payload: { ...userReducer, newUser },
    });
  };
  const authentication = (loggin) => {
    console.log(users);
    const userToLogin = users.find(
      (user) =>
        user.username === loggin.username && user.password === loggin.password
    );

    if (userToLogin) {
      alert(`Welcome ${loggin.username}`);

      addAuthUser(loggin);

      return true;
    }
  };

  const addAuthUser = (loggin) => {
    dispatch({
      type: "SAVE_USER",
      payload: { ...loggin, isAuth: true },
    });
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UsersContext.Provider value={{ addUser, authentication, authUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
