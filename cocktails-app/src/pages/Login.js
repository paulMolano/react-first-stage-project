import React from "react";
import { LoginForm } from "../components/LoginForm";
import WithLayout from "../hoc/withLayout";

const Login = () => {
  return (
    <WithLayout>
      <div className="container mt-12">
        <LoginForm />
      </div>
    </WithLayout>
  );
};

export default Login;
