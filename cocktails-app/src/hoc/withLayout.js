import React from "react";
import { Header } from "../components/Header";

export default function withLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
