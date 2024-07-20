import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchprofile({ userName }: { userName: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileShow",
    body: { userName },
  });
}
export async function fetchfollowers({ id }: { id: number }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileFollowers",
    body: { id },
  });
}
export async function fetchcheckfollowing({ id }: { id: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileIsFollowing",
    params: id,
  });
}
export async function fetchunfollow({ id }: { id: string }) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "profileUnfollow",
    params: id,
  });
}
export async function fetchfollow({ id }: { id: string }) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "profileFollow",
    params: id,
  });
}
