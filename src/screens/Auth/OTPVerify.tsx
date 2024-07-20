import React from "react";
import { AuthLayout } from "@atoms";
import { OTPVerifyForm } from "@forms";

type Props = {};

const Login = ({}: Props) => {
  return (
    <AuthLayout>
      <OTPVerifyForm />
    </AuthLayout>
  );
};

export default Login;
