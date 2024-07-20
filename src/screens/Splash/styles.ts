import { Colors, getWidth, scale } from "@ui";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary_main,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: getWidth() - 100,
    resizeMode: "contain",
  },
});

export default styles;
