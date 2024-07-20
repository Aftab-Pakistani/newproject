import { scale } from "./dimensions";

export const radius = {
  default: {
    borderRadius: scale(8),
  },
  min: {
    borderRadius: scale(10),
  },
  max: {
    borderRadius: scale(12),
  },
  full: {
    borderRadius: scale(100),
  },
};
