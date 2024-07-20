import React, { ReactNode } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { styles } from "./styles";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
};

const Cotnainer = ({ children, style }: Props) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Cotnainer;
