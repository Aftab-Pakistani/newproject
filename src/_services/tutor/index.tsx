import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchcategory() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "tutorialCategories",
  });
}

export async function fetchsubcategory(id: string) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "tutorialCategories",
    params: id,
  });
}

export async function fetchsubjects({
  subjectCategory,
}: {
  subjectCategory: string;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "subjectsByCategory",
    body: { subjectCategory },
  });
}

export async function fetchtutors({
  area,
  city,
  state,
  subject_level,
  subjects,
}: {
  area: string;
  city: string;
  state: string;
  subject_level: string;
  subjects: string;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "searchTutor",
    body: { area, city, state, subject_level, subjects },
  });
}

export async function fetchmodeChange({ viewmode }: { viewmode: string }) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "settingUpdate",
    body: { viewmode },
  });
}

export async function fetchinstructorRequest() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "instructorRequest",
  });
}
