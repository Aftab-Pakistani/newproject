import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchsubjectcategories({
  parent_id,
}: {
  parent_id: any;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "subjectCategoriesparent",
    params: parent_id,
  });
}

export async function fetchtutorsubjects() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "tutorSubjects",
  });
}
export async function fetchsavetutorsubjects({
  subjects,
}: {
  subjects: string;
}) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "tutorSubjects",
    body: { subjects },
  });
}

export async function fetchparticularsubjectcategories({
  subject_category_id,
}: {
  subject_category_id: string;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "subjectCategoriessubjectid",
    params: subject_category_id,
  });
}
