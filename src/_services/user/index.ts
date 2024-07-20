import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchUser(userName: string) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "user",
    body: null,
  });
}

export async function followUnfollow(userName: string) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "profileFollowUnfollow",
    body: { user_name: userName },
    params: userName,
  });
}

export async function fetchConnectionToFollow() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileIsNotFollowing",
    // body: { user_name: userName },
    // params: userName,
  });
}

export async function fetchUserdetails() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "personalDetail",
  });
}

export async function fetchSaveUserdetails(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "updatePersonalDetail",
    body: data,
  });
}

export async function fetchSavefee(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "updateFees",
    body: data,
  });
}

export async function fetchSavetags(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "updateTaglineBio",
    body: data,
  });
}

export async function fetchuploadImage(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "updateProfilePhoto",
    body: data,
  });
}

export async function fetchUsers({ username }: { username: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "users",
    body: { username },
  });
}

export async function fetchOrder(data:any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "order",
    body: data,
  });
}
export async function fetchpaymentTypes(data:any) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "paymentTypeList",
  });
}

export async function fetchlanguages(data:any) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "languages",
  });
}

export async function fetchsubmitReview(data:any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "reviewSubmit",
    body: data,
  });
}