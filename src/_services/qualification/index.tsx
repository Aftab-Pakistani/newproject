import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchcreateQualification(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "qualification",
    body: data,
  });
}

export async function fetchqualificationdelete(id: string) {
  return request<ResponseType<any>>({
    method: "delete",
    endPoint: "qualification",
    params: id,
  });
}

export async function fetchqualification() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "qualification",
  });
}
export async function fetchinitutesList() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "institutesTypeList",
  });
}
export async function fetchdegreeLevels() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "degreeLevels",
  });
}
export async function fetchdegree({ degreeLevel }: { degreeLevel: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "degrees",
    body: { degreeLevel },
  });
}
export async function fetchsearchInititudes({ keyword }: { keyword: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "institutes",
    body: { keyword },
  });
}
