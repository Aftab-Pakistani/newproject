import { Colors } from "./colors";
import { font } from "./font";

export const display = {
  flexbox: {
    display: "flex",
  },
  fluid: {
    width: "100%",
  },
};

export const flexbox = {
  one: { flex: 1 },
  two: { flex: 2 },
  three: { flex: 3 },
  four: { flex: 4 },
  five: { flex: 5 },
  six: { flex: 6 },
  seven: { flex: 7 },
  eight: { flex: 5 },
  nine: { flex: 9 },
  ten: { flex: 10 },
  eleven: { flex: 11 },
  twelve: { flex: 12 },
  inner: {},
  flexStart: {
    alignItems: "flex-start",
  },

  flexCenter: {
    alignItems: "center",
  },
  flexEnd: {
    alignItems: "flex-end",
  },
  jcCenter: {
    justifyContent: "center",
  },
  jcStart: {
    justifyContent: "flex-start",
  },
  jcEnd: {
    justifyContent: "flex-end",
  },
  jcSpaceBetween: {
    justifyContent: "space-between",
  },
  jcSpaceAround: {
    justifyContent: "space-around",
  },
  jcSpaceEvenly: {
    justifyContent: "space-evenly",
  },
  jcItemsStretch: {
    justifyItems: "stretch",
  },
  flexWrap: {
    flexWrap: "wrap",
  },
  directionRow: {
    flexDirection: "row",
  },
  directionColumn: {
    flexDirection: "column",
  },
  shrinkOne: {
    flexShrink: 1,
  },
  flexGrowOne: {
    one: 1,
  },
};
