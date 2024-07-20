import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchBatchlist() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "batchList",
  });
}

export async function fetchShowbatch({ id }: { id: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "batchShow",
    params: id,
  });
}

export async function fetchbatchattendies({ slug }: { slug: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "batchAttendies",
    body: { slug },
  });
}

export async function fetchannouncements({
  batch_slug,
  accessingforProfile,
}: {
  batch_slug: string;
  accessingforProfile: number;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileAnnouncement",
    body: { batch_slug, accessingforProfile },
  });
}

export async function fetchlibrary({
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
export async function fetchsaveAssignment(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "assignmentStore",
    body: data,
  });
}
export async function fetchupdateBatch(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "batchUpdate",
    params:data?.id,
    body: data,
  });
}
export async function fetchsaveAskquestion(data: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "questionStore",
    body: data,
  });
}

export async function fetchassigmentlist({
  ref_no,
  type,
}: {
  ref_no: string;
  type: string;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "assignmentList",
    body: { ref_no, type },
  });
}

export async function fetchaskquestionlist({
  ref_no,
  type,
}: {
  ref_no: string;
  type: string;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "questionList",
    body: { ref_no, type },
  });
}

export async function fetchmyBatch() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "myBatches",
  });
}
export async function fetchcreateBatch({ title }: { title: string }) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "batch",
    body: { title },
  });
}
export async function fetcheditBatch({ id }: { id: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "batchEditById",
    params:id
  });
}
export async function fetchsubjectslist() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "subjectList",
  });
}

export async function fetcheditBatchStudents({ id }: { id: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "batchProfileStudents",
    params:id
  });
}

export async function fetchaddStudent(data:any) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "batchAddStudent",
    body:data
  });
}

export async function fetchvideoList(data:any) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileLibrary",
    body:data
  });
}

export async function fetchsaveVideo(data:any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "profileLibrary",
    body:data
  });
}


export async function fetchbatchAnnouncements(data:any) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "profileAnnouncement",
    body: data,
  });
}