import { Typography } from "@molecules";
import React, { ReactNode } from "react";
import { StyleProp, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import styles from "./styles";
import { ButtonSize, ColorTypes } from "@ts";

type Props = {
  children: ReactNode;
  color?: keyof ColorTypes;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const Link = ({ children, color, onPress,style }: TouchableOpacityProps & Props) => {
  return (
    <TouchableOpacity style={[styles.container,style]} onPress={onPress}>
      <Typography color={color}>{children}</Typography>
    </TouchableOpacity>
  );
};

export default Link;
