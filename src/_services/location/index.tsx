import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchCountries() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "countries",
  });
}

export async function fetchCities({ id }: { id: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "cities",
    params: id,
  });
}
export async function fetchStates({ id }: { id: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "states",
    params: id,
  });
}

export async function fetchAreas({ id }: { id: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "areas",
    params: id,
  });
}

export async function fetchsavelocation(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "updateLocation",
    body: data,
  });
}
