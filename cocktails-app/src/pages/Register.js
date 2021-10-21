import React from "react";
import { RegisterForm } from "../components/RegisterForm";
import WithLayout from "../hoc/withLayout";

const Register = () => {
  return (
    <WithLayout>
      <div className="container mt-12">
        <RegisterForm />
      </div>
    </WithLayout>
  );
};

export default Register;
