import React from "react";
import { verify } from "@services";
import { useFormik } from "formik";
import { FormLayout } from "@atoms";
import { useNavigationHooks } from "@hooks";
import { Button, Input } from "@molecules";
import { MainAppStackTypes, VerifyTypes } from "@ts";
import { useMutation } from "@tanstack/react-query";
import { verifyFromValidation } from "@validations";
import { useRoute } from "@react-navigation/native";

type Props = {};

const ForgetPasswordForm = ({}: Props) => {
  const { params } = useRoute();
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const { mutateAsync: onVerify, isLoading } = useMutation({
    mutationFn: verify,
  });

  const { values, errors, handleSubmit, setFieldValue, setValues } =
    useFormik<VerifyTypes>({
      initialValues: {
        verify_token: "",
        email: params?.item?.email,
        verify_id: params?.item?.verify_id,
      },
      validationSchema: verifyFromValidation,
      validateOnChange: false,
      onSubmit: (data) => onVerify(data),
    });

  const onSubmit = async () => {
    onVerify(values)
      .then((data: any) => {
        if(data){
          navigate("ResetPassword", {
          item: data,
        })}
      })
      .catch();
  };

  const onChange = (name: string, value: string) => {
    setFieldValue(name, value);
  };

  return (
    <FormLayout heading="Verification">
      <Input
        label={"Code"}
        inputMode="numeric"
        autoComplete="email"
        autoCapitalize="none"
        keyboardType="phone-pad"
        value={values.verify_token}
        placeholder="Enter 6 Digit Code"
        onChangeText={(value: string) => onChange("verify_token", value)}
      />
      <Button
        label="Verify"
        color="white"
        onPress={onSubmit}
        loading={isLoading}
      />
    </FormLayout>
  );
};

export default ForgetPasswordForm;
