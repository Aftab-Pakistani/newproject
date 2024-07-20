import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchexperienceTypes() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "experienceTypes",
  });
}
export async function fetchexperiences() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "experiences",
  });
}
export async function fetchcreateExperience(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "experiences",
    body: data,
  });
}

export async function fetchexperiencedelete(id: string) {
  return request<ResponseType<any>>({
    method: "delete",
    endPoint: "experiences",
    params: id,
  });
}
