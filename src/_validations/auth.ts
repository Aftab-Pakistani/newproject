import { object, string } from "yup";

export const loginFromValidation = object().shape({
  email: string().email().required(),
  password: string().required(),
});

export const registerFromValidation = object().shape({
  first_name: string().required(),
  last_name: string().required(),
  phone_no: string().required(),
  email: string().email().required(),
  password: string().required(),
});

export const forgetFromValidation = object().shape({
  email: string().email().required(),
});

export const verifyFromValidation = object().shape({
  email: string().email().required(),
  verify_token: string().required(),
  verify_id: string().required(),
});

export const ResetFromValidation = object().shape({
  email: string().email().required(),
  password: string().required(),
  password_confirmation: string().required(),
  verify_id: string().required(),
});