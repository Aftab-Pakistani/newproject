import { ColorTypes } from "@ts";
import React from "react";
import { ActivityIndicator, TouchableOpacityProps, View } from "react-native";
import styles from "./styles";

type Props = {
  size?: "small" | "large";
  color?: keyof ColorTypes;
};

const Loader = ({ size, color }: TouchableOpacityProps & Props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} size="large"></ActivityIndicator>
    </View>
  );
};

export default Loader;
