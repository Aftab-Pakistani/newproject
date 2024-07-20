import { Colors, spacing, radius, scale, getWidth } from "@ui";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  transctionwrap:{
  marginVertical:spacing.S16
  },
  transactions:{backgroundColor:"white",
    padding:spacing.S18,
    ...radius.max,
    elevation:0.7,
    margin:0.8
  },
  text: {
    fontSize: scale(17),
  },
  contentContainerStyle: {
    gap: spacing.S6,
  },

});

export default styles;
