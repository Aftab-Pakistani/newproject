import { FormLayout } from "@atoms";
import { ForgetTypes, MainAppStackTypes, MyAccountTypes } from "@ts";
import { useNavigationHooks } from "@hooks";
import { Button, Input, Link, Typography } from "@molecules";

import React from "react";
import { useMutation } from "@tanstack/react-query";
import { forget } from "@services";
import { ss, useSharedState } from "@helper";
import { forgetFromValidation } from "@validations";
import { useFormik } from "formik";
import { setStorage } from "@storage";

type Props = {};

const ResetPasswordForm = ({}: Props) => {
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const { mutateAsync: onForget, isLoading } = useMutation({
    mutationFn: forget,
  });
  const [auth, setAuth] = useSharedState<any>(ss.auth, null);

  const { values, errors, handleSubmit, setFieldValue, setValues } =
    useFormik<ForgetTypes>({
      initialValues: {
        email: "",
      },
      validationSchema: forgetFromValidation,
      validateOnChange: false,
      onSubmit: (data) => onForget(data),
    });

  const onSubmit = async () => {
    onForget(values)
      .then((data: any) => {
         navigate("OTPVerify", {
           item: data,
         })
      })
      .catch();
  };

  const onChange = (name: string, value: string) => {
    setFieldValue(name, value);
  };

  const onBackToLogin = () => {
    navigate("Login");
  };
  return (
    <FormLayout heading="Forgot Password?">
      <Input
        inputMode="email"
        autoComplete="email"
        value={values.email}
        autoCapitalize="none"
        label={"Email address"}
        keyboardType="email-address"
        placeholder="mail@domain.com"
        onChangeText={(value: string) => onChange("email", value)}
      />
      <Button label="Send OTP" color="white" loading={isLoading} onPress={onSubmit} />
      <Button
        label="Back to Login"
        color="white"
        basic
        size="small"
        onPress={onBackToLogin}
      />
    </FormLayout>
  );
};

export default ResetPasswordForm;
