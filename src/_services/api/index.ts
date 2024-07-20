import { HTTP_URL } from "@settings";
import { create } from "apisauce";
export { setBaseUrl } from "./request";

export const API = create({
  baseURL: HTTP_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
API.addMonitor(() => {});
