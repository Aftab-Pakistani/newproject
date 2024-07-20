import React, { ReactNode } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import Typography from "../Typography";

type Props = {
  label: string;
  children: ReactNode;
};

const Select = ({ label, children }: Props) => {
  return (
    <View style={styles.container}>
      <Typography fontWeight="bold" style={styles.label}>{label}</Typography>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

export default Select;
