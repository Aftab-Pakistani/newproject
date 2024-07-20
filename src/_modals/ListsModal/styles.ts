import { Colors, scale, spacing, radius, getWidth, getHeight } from "@ui";
const SCREEN_HIGHT = Dimensions.get('screen').height;
import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 0,
     width: getWidth(),
    height: getHeight(),
    alignItems: "center",
    justifyContent: "flex-end",

  },
  modalContent: {
   marginTop:parseInt(SCREEN_HIGHT.toFixed(0))/20,
    height: parseInt(SCREEN_HIGHT.toFixed(0)) - parseInt(SCREEN_HIGHT.toFixed(0))/5.5,
    width: getWidth(),
    backgroundColor: Colors.primary_lightest,
    elevation: scale(1),
    paddingHorizontal: spacing.S18,
    borderTopRightRadius: scale(15),
    borderTopStartRadius: scale(15),
  },
  notch: {
    height: scale(4),
    backgroundColor: Colors.primary_main,
    marginVertical: spacing.S10,
    width: "18%",
    ...radius.max,
    alignSelf: "center",
  },
  seprator: {
    height: scale(10),
    borderBottomWidth: 0.8,
    borderColor: Colors.primary_lighter,
    marginVertical: spacing.S10,
    width: "12%",
    alignSelf: "center",
  },
  btnsection: {
    width: getWidth(),
    paddingVertical: spacing.S2,
    backgroundColor: Colors?.white,
    alignItems: "center",
  },
  btn: { width: "95%" },
  title: {
    textAlign: "center",
  },
  text: {
    fontSize: scale(14),
  },
});

export default styles;
