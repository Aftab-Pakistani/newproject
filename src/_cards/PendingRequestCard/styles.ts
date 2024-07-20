import { Colors, spacing, radius, scale, getWidth, fonts } from "@ui";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: spacing.S14,
    ...radius.min,
    backgroundColor: Colors.primary_darker,
    paddingTop: spacing.S14,
    paddingBottom: spacing.S10,
    paddingHorizontal: spacing.S14,
    //alignItems: "center",
    //justifyContent: "space-between",
   // flexDirection: "row",
    elevation:0.8
  },
  title: {
    fontSize:scale(15),
  },
  title2: {
    marginTop:scale(2),
    fontSize:scale(14)
  },
  desc: {
    marginTop: spacing.S4,
    fontSize:scale(17),
    color:Colors?.primary_light
  },
  input:{
    color:Colors?.black,
    fontSize:scale(23),
    fontFamily:fonts.Heavy
  },
  textareashort: {
    height: scale(110),
    ...radius.default,
    fontWeight: "700",
    fontSize:scale(14),
    textAlignVertical: "top",
    paddingVertical:spacing.S10,
    backgroundColor: Colors?.white,
  },
});

export default styles;
