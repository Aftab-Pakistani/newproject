import { MainAppStackTypes, MyAccountTypes, RegisterTypes } from "@ts";
import { useFormik } from "formik";
import { FormLayout } from "@atoms";
import { register } from "@services";
import { setStorage } from "@storage";
import { useNavigationHooks } from "@hooks";
import { ss, useSharedState } from "@helper";
import { useMutation } from "@tanstack/react-query";
import { registerFromValidation } from "@validations";
import { Button, ButtonGroup, Input } from "@molecules";

const RegisterForm = () => {
  const { navigate } = useNavigationHooks<MainAppStackTypes>();
  const { mutateAsync: onRegister, isLoading } = useMutation({
    mutationFn: register,
  });
  const [auth, setAuth] = useSharedState<any>(ss.auth, null);
  const { values, errors, handleSubmit, setFieldValue, setValues } =
    useFormik<RegisterTypes>({
      initialValues: {
        first_name: "",
        last_name: "",
        gender: "MALE",
        email: "",
        password: "",
        phone_code: 92,
        phone: "",
        profile_image: "profile-male-01.jpg",
        program: "",
        role: "",
        source: "mobile",
        whatsapp_phone_code: 92,
        whatsapp_number: "",
      },
      validationSchema: registerFromValidation,
      validateOnChange: false,
      onSubmit: (data) => onRegister(data),
    });

  const onSubmit = async () => {
    onRegister(values)
      .then((data: any) => {
        const dataObj: MyAccountTypes = {
          token: data.access_token,
          profile: data.user,
        };
        setStorage("auth", dataObj);
        setAuth(dataObj);
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
    <FormLayout
      heading="Signup"
      description="Create your account to start transaction"
      buttons={
        <ButtonGroup>
          <Button
            label="SIGNUP"
            color="primary_main"
            size="large"
            onPress={onSubmit}
            loading={isLoading}
          />
          <Button
            label="LOGIN"
            color="primary_main"
            basic
            size="large"
            onPress={onBackToLogin}
          />
        </ButtonGroup>
      }
    >
      <Input
        label={"First name"}
        placeholder="jhon"
        autoComplete="email"
        keyboardType="email-address"
        inputMode="email"
        autoCapitalize="none"
        onChangeText={(value: string) => onChange("first_name", value)}
        value={values.first_name}
      />
      <Input
        label={"Last name"}
        placeholder="Dow"
        autoComplete="email"
        keyboardType="email-address"
        inputMode="email"
        autoCapitalize="none"
        onChangeText={(value: string) => onChange("last_name", value)}
        value={values.last_name}
      />
      <Input
        label={"Phone no"}
        placeholder="971454545"
        keyboardType="phone-pad"
        onChangeText={(value: string) => onChange("phone", value)}
        value={values.phone}
      />
      <Input
        label={"Email address"}
        placeholder="jhon@domain.com"
        autoComplete="email"
        keyboardType="email-address"
        inputMode="email"
        autoCapitalize="none"
        onChangeText={(value: string) => onChange("email", value)}
        value={values.email}
      />
      <Input
        label={"Password"}
        placeholder=""
        keyboardType="visible-password"
        autoCapitalize="none"
        onChangeText={(value: string) => onChange("password", value)}
        value={values.password}
        password
      />
    </FormLayout>
  );
};

export default RegisterForm;
