import { request } from "@services";
import { ResponseType } from "@ts";

export async function fetchmarkRead({
  messages_to_mark_read,
}: {
  messages_to_mark_read: string;
}) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "messageMarkRead",
    body: { messages_to_mark_read },
  });
}
export async function fetchunRead() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "messageUnRead",
  });
}

export async function fetchmessage({
  selected_username,
}: {
  selected_username: string;
}) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "message",
    body: { selected_username },
  });
}
export async function fetchsendmessage({
  sender,
  receiver,
  message,
}: {
  sender: string;
  receiver: string;
  message: string;
}) {
  return request<ResponseType<any>>({
    method: "post",
    endPoint: "message",
    body: { sender, receiver, message },
  });
}

export async function fetchusers() {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "users",
  });
}

export async function fetchsearchusers({ username }: { username: string }) {
  return request<ResponseType<any>>({
    method: "get",
    endPoint: "users",
    body: { username },
  });
}
