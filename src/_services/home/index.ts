import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchHome() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "home",
  });
}
