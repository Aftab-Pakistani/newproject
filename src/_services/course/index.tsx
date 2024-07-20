import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchCreatecourse(data: any) {
    return request<ResponseType<any>>({
      method: "post",
      endPoint: "courseCreate",
      body: data,
    });
  }

  export async function fetchcourselists(data:any) {
    return request<ResponseType<any>>({
      method: "get",
      endPoint: "tutorialCourse",
      body:data
    });
  }
  export async function fetchcourseslug(id:string) {
    return request<ResponseType<any>>({
      method: "get",
      endPoint: "tutorialCourse",
      params:id
    });
  }