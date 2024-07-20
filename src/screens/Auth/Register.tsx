import React from "react";
import { AuthLayout } from "@atoms";
import { RegisterForm } from "@forms";

type Props = {};

const Login = ({}: Props) => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Login;
