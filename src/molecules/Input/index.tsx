import React, { useState } from "react";
import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon, Typography } from "@molecules";
import styles from "./styles";
import { IconsName } from "@ts";

type Props = {
  label: string;
  value: string;
  password?: boolean;
  editable?: boolean;
  icon?: IconsName;
  onChangeText: (_text: string) => void;
};

const Input = ({
  label,
  password,
  value,
  icon,
  editable,
  onChangeText,
  ...props
}: TextInputProps & Props) => {
  const onChange = (text: any) => {
    onChangeText(text);
  };
  const [showPassword, setShowPassword] = useState(false);

  const onShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.container}>
      <Typography color={"primary_darker"} fontWeight="bold" style={styles.label}>
        {label}
      </Typography>
      <View style={styles.field}>
        {(password || icon) && (
          <TouchableOpacity style={styles.rightIcon} onPress={onShowPassword}>
            <Icon
              name={icon || `${showPassword ? "eye_open" : "eye_close"}`}
              width={28}
              height={28}
            />
          </TouchableOpacity>
        )}
        <TextInput
          style={styles.input}
          secureTextEntry={password && !showPassword}
          onChangeText={onChange}
          value={value}
          editable={editable}
          selectTextOnFocus={editable}
          {...props}
        />
      </View>
    </View>
  );
};

export default Input;
