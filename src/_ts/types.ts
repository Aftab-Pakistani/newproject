import { enum_document_type, enum_toast } from "./enums";

export type type_toast = {
  message: string;
  title: string;
  visible: boolean;
  status: enum_toast;
};

export const DOCUMENT_TYPE = enum_document_type;
