import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

export const Header = () => {
  const { authUser } = useContext(UsersContext);

  return (
    <header className="bg-alert">
      <h1>Love Drinks {authUser ? <span>{authUser.username}</span> : null}</h1>
    </header>
  );
};
