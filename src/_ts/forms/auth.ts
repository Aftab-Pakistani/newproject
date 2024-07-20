export type LoginTypes = {
  email: string;
  password: string;
};

export type RegisterTypes = {
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
  password: string;
  phone: string;
  phone_code: number;
  profile_image: string;
  program: string;
  role: string;
  source: string;
  whatsapp_number: string;
  whatsapp_phone_code: number;
};

export type ForgetTypes = {
  email: string;
};

export type VerifyTypes = {
  verify_token: string;
  email: string;
  verify_id: string;
};

export type ResetTypes = {
  email: string;
  password: string;
  verify_id: string;
  password_confirmation: string;
};
