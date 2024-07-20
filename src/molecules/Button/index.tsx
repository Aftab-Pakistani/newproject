import React, { ReactNode } from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
} from "react-native";
import styles from "./styles";
import { Colors, bgColor } from "@ui";
import { Typography } from "@molecules";
import { ButtonSize, ColorTypes } from "@ts";

type Props = {
  label: string;
  size?: keyof ButtonSize;
  color?: keyof ColorTypes;
  basic?: boolean;
  dark?: boolean;
  loading?: boolean;
  onPress?: () => void;
  leftComponent?: ReactNode;
  rightComponent?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Button = ({
  label,
  dark = false,
  onPress,
  size = "default",
  color = "primary_main",
  leftComponent,
  rightComponent,
  basic = false,
  loading = false,
  style,
  ...props
}: TouchableOpacityProps & Props) => {
  const isLight = color.includes("light") || color.includes("white");
  const Component: any = onPress ? TouchableOpacity : View;
  return (
    <Component
      style={[
        styles.container,
        styles[size],
        styles[color],
        basic
          ? { ...styles.basic, borderColor: Colors[color] }
          : { ...bgColor[color] },
        style,
      ]}
      onPress={onPress ? onPress : undefined}
      {...props}
    >
      {leftComponent}
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Typography
          fontWeight={isLight ? "regular" : "heavy"}
          style={[
            styles.label,
            styles[`${size}_txt`],
            basic
              ? { color: Colors[color] }
              : isLight
              ? dark
                ? styles.darkLabel
                : styles.lightLabel
              : { ...styles.label },
          ]}
        >
          {label}
        </Typography>
      )}
      {rightComponent}
    </Component>
  );
};

export default Button;
