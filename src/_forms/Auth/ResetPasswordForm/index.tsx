import React from "react";
import { reset } from "@services";
import { useFormik } from "formik";
import { FormLayout } from "@atoms";
import { Button, Input } from "@molecules";
import { useNavigationHooks } from "@hooks";
import { MainAppStackTypes, ResetTypes } from "@ts";
import { ResetFromValidation } from "@validations";
import { useMutation } from "@tanstack/react-query";
import { useRoute } from "@react-navigation/native";

type Props = {};

const OTPVerifyForm = ({}: Props) => {
  const { params } = useRoute();
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const { mutateAsync: onReset, isLoading } = useMutation({
    mutationFn: reset,
  });
  const { values, errors, handleSubmit, setFieldValue, setValues } =
  useFormik<ResetTypes>({
    initialValues: {
      password: "",
      password_confirmation: "",
      email: params?.item?.email,
      verify_id: params?.item?.verify_id,
    },
    validationSchema: ResetFromValidation,
    validateOnChange: false,
    onSubmit: (data) => onReset(data),
  });
  const onSubmit = async () => {
    onReset(values)
      .then((data: any) => {
        if (data) {
          navigate("Login");
        }
      })
      .catch();
  };

  const onChange = (name: string, value: string) => {
    setFieldValue(name, value);
  };

  return (
    <FormLayout heading="New Password">
      <Input
        placeholder=""
        label={"Password"}
        autoCapitalize="none"
        value={values.password}
        keyboardType="visible-password"
        onChangeText={(value: string) => onChange("password", value)}
      />
      <Input
        placeholder=""
        label={"password_confirmation"}
        autoCapitalize="none"
        value={values.password_confirmation}
        keyboardType="visible-password"
        onChangeText={(value: string) =>
          onChange("password_confirmation", value)
        }
      />
      <Button
        label="Reset Password"
        color="white"
        onPress={onSubmit}
        loading={isLoading}
      />
    </FormLayout>
  );
};

export default OTPVerifyForm;
