import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchQuizList() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "quizList",
    // body: { user_name: userName },
    // params: userName,
  });
}
export async function fetchQuizShow(reference: string) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "quizShow",
    body: { reference: reference },
    // params: userName,
  });
}
export async function startQuizTest(body: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "quizStart",
    body: body,
    // params: userName,
  });
}
export async function fetchQuizQuestionShow({ reference, current_page }: any) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "quizQuestionShow",
    body: { reference: reference, page: current_page },
    // params: userName,
  });
}

export async function saveQuizQuestionAnswer({
  questionId,
  answerId,
  reference,
}: any) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "QuizAnswerSave",
    body: { questionId: questionId, answerId, reference },
    // params: userName,
  });
}

export async function fetchQuizResult({ reference }: any) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "quizResult",
    body: { reference },
    params: reference,
  });
}
