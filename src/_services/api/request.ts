import { modalShow } from "@navigations";
import { HTTP_URL, HTTP_URL_MOBILE } from "@settings";
import { ApiResponse } from "apisauce";

import { getStorage } from "@storage";
import { StorageKeyTypes } from "@ts";
import { API } from ".";
import APIs, { ApisTypes } from "./APIs";

export const setBaseUrl = (endPoint: keyof ApisTypes) => {
  return API.setBaseURL(HTTP_URL);
};

type ApiMethodsTypes = "get" | "post" | "put" | "delete" | "patch";

type RequestParams<T, R> = {
  method: ApiMethodsTypes;
  endPoint: keyof ApisTypes;
  body?: R | any;
  callback?: (_res: ApiResponse<T>) => void;
  params?: string;
  skipError?: boolean;
};

type ResponseType<T> = ApiResponse<T & ErrorResponseType>;

export type UploadProgressTypes = {
  isTrusted: boolean;
  lengthComputable: number;
  loaded: number;
  total: number;
};

export async function request<T, R = null>({
  method,
  endPoint,
  callback,
  body,
  params = "",
  skipError,
}: RequestParams<T, R>) {
  // const { token } = getQueryData<Auth>("AUTH") || {};
  try {
    setBaseUrl(endPoint);
    const token: any = await getStorage<StorageKeyTypes>("auth");

    if (token?.token) API.setHeader("Authorization", `Bearer ${token?.token}`);
    const res: ResponseType<T> = await API[method](
      `${APIs[endPoint]}${params}`,
      body
    );

    console.log("ep:", {
      ep: `${APIs[endPoint]}${params}`,
      body,
      res: res.data,
      method,
    });
    // console.log("03---------body:", body);
    // console.log("04---------data:", res.data);
    // console.log("05---------status:", res);

    if (res.status !== 200) {
      modalShow(res.data?.error || res.data?.message);
      callback && callback(res);
      return;
    } else {
      callback && callback(res);

      if (res.ok || skipError) return res.data;
    }
  } catch (e) {
    console.log(e);
    modalShow("Something went wrong");
  }
}

type ErrorResponseType = {
  detail: string;
  code: string;
  message: string;
};
