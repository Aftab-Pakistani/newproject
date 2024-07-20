import { Colors, spacing, radius, scale, getWidth } from "@ui";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.S14,
    width: "100%",
    ...radius.max,
    //paddingVertical: spacing.S12,
    // backgroundColor: Colors.white,
    //elevation:scale(2),
    //marginHorizontal: spacing.S5,
    //marginVertical:spacing.S4,
    //borderWidth: scale(0.8),
    //borderColor: Colors.primary_lighter,
  },
  inner: {},
  inner2: {
    alignSelf: "center",
  },
  title: {
    textTransform: "capitalize",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: spacing.S8,
  },
  text1: {
    fontSize: scale(13),
    alignSelf: "center",
    marginTop: -spacing.S10,
  },
  text2: {
    fontSize: scale(16),
    fontWeight: "bold",
  },
  text3: {
    fontSize: scale(13),
  },
  textbodycontainer: {
    width: "80%",
  },
  btn1: {
    paddingRight: spacing.S10,
  },
  btn2: {
    //paddingHorizontal: spacing.S10,
  },
  thumb: {
    width: scale(60),
    height: scale(60),
    ...radius.full,
    backgroundColor: Colors.primary_main,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  iconcontainer: {
    width: "20%",
    marginTop: spacing.S6,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  seprator: {
    height: scale(0.8),
    backgroundColor: Colors.primary_lighter,
    marginVertical: spacing.S12,
    alignSelf: "center",
    width: "100%",
  },
});

export default styles;
