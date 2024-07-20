import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetcheventcategories() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "eventCategories",
  });
}

export async function fetcheventlist() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "eventList",
  });
}

export async function fetcheventslug(data: any) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "eventShow",
    params: data,
  });
}

export async function fetchjoincommity({ id }: { id: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "joinCommunity",
    params: id,
  });
}

export async function fetchpaymentType() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "paymentTypeList",
  });
}
