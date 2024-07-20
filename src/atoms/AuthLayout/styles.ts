import { Colors, scale, spacing } from "@ui";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary_darkest,
    paddingTop: scale(80),
  },
  logoWrap: {
    marginBottom: spacing.S34,
    alignItems:"center"
  },
  logo: {
    width: scale(190),
    height: scale(41),
  },
});

export default styles;
