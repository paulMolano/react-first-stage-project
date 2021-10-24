import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";

export const Header = () => {
  const { authUser } = useContext(UsersContext);

  return (
    <header className="bg-alert">
      <h1>Cocktails</h1>
      <h1>
        {authUser.username !== ""
          ? `Wellcome ${authUser.username}!`
          : "Because everyone loves drinks"}{" "}
      </h1>
    </header>
  );
};
