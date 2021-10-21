import { createContext, useState, useEffect } from "react";
export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  let usersLS = JSON.parse(localStorage.getItem("users"));
  if (!usersLS) {
    usersLS = [];
  }

  const [users, setUsers] = useState(usersLS);
  const [authUser, setAuthUser] = useState({
    username: "",
    password: "",
    isAuth: false,
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const addAuthUser = (loggin) => {
    const userToLogin = usersLS.find(
      (user) =>
        user.username === loggin.username && user.password === loggin.password
    );

    if (userToLogin) {
      alert(`Welcome ${loggin.username}`);

      setAuthUser({ ...loggin, isAuth: true });

      return true;
    }
  };

  return (
    <UsersContext.Provider value={{ addUser, addAuthUser, authUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
