import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchIndus() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "industries",
  });
}

export async function fetchJobList({
  industry,
  job_title,
  area,
}: {
  industry: string;
  job_title: string;
  area: string;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "jobList",
    body: { industry, job_title, area },
  });
}

export async function fetchJobShow({
  user,
  role,
}: {
  user: string;
  role: string;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "jobShow",
    body: { user, role },
  });
}
