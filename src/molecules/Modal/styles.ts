import { Colors, scale, spacing, radius } from "@ui";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: Colors.white,
    padding: scale(20),
    ...radius.max,
  },
});

export default styles;
