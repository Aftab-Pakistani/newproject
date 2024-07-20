import { request } from "@services";
import { ResponseType } from "@ts";

export async function login(body: { email: string; password: string }) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "login",
    body,
  });
}

export async function register(body: {
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
}) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "signup",
    body,
  });
}

export async function forget(body: { email: string }) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "passwordResetOtpSend",
    body,
  });
}

export async function verify(body: {
  email: string;
  verify_id: string;
  verify_token: string;
}) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "passwordResetOtpVerify",
    body,
  });
}
export async function reset(body: {
  email: string;
  verify_id: string;
  password: string ;
  password_confirmation: string;
}) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "updateNewPassword",
    body,
  });
}
