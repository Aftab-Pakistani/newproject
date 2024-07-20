import React from "react";
import { AuthLayout } from "@atoms";
import { LoginForm } from "@forms";

type Props = {};

const Login = ({}: Props) => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
