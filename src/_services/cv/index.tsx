import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchResuemlist() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "resumes",
  });
}
export async function fetchResuemupload(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "resumes",
    body: data,
  });
}

export async function fetchResuemdefault(id: string, data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "makeFeatured",
    params: id,
    body: data,
  });
}

export async function fetchResuemdelete(id: string) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "resumeDelete",
    params: id,
  });
}
