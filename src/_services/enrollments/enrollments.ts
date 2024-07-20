import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchProfileEnrollments() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileEnrollments",
  });
}

export async function fetchEnrollmentDetail() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileEnrollments",
  });
}

export async function fetchEnrollmentLibrary({
  batch_slug,
  doc_type,
}: {
  batch_slug: string;
  doc_type: string;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileLibrary",
    body: { batch_slug, doc_type },
  });
}
export async function fetchEnrollmentAnnouncements() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileAnnouncement",
  });
}
export async function fetchEnrollmentCommunity() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "batchAttendies",
  });
}
export async function fetchEnrollmentSubmitReview() {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "reviewSubmit",
  });
}
export async function fetchEnrollmentAssignment() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "assignmentList",
  });
}
export async function fetchEnrollmentAskQuestion() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "questionList",
  });
}
