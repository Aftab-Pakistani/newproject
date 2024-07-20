import { ss, useSharedState } from "@helper";
import { ColorTypes, enum_toast, type_toast } from "@ts";
import { Colors } from "@ui";
import React, { ReactNode } from "react";
import { View } from "react-native";
import CustoModal from "react-native-modal";
import Typography from "../Typography";
import styles from "./styles";
import Button from "../Button";

type Props = {
  title: string;
  isVisible: boolean;
  children: ReactNode;
  titleColor?: keyof ColorTypes;
  onClose?: () => void;
};

const Modal = ({ title, titleColor, isVisible, children, onClose }: Props) => {
  const [toast, setToast] = useSharedState<type_toast>(ss.toast, {
    message: "",
    title: "",
    visible: false,
    status: enum_toast.error,
  });

  const onCloseModal = () => {
    onClose && onClose();
    setToast({
      ...toast,
      visible: false,
    });
  };

  return (
    <CustoModal
      isVisible={isVisible}
      backdropColor={Colors.primary_darker}
      backdropOpacity={0.5}
      style={styles.container}
      animationInTiming={290}
      animationOutTiming={290}
      onBackdropPress={onCloseModal}
      onBackButtonPress={onCloseModal}
      swipeDirection={"down"}
      onSwipeComplete={onCloseModal}
    >
      <View style={styles.modalContent}>
        {title && (
          <Typography variant="h3" color={titleColor}>
            {title}
          </Typography>
        )}
        {children}

        <Button
          label="Close"
          color="white"
          size="small"
          style={{
            paddingTop: 0,
            marginTop: 0,
            paddingBottom: 0,
            marginBottom: 0,
          }}
          onPress={onCloseModal}
        />
      </View>
    </CustoModal>
  );
};

export default Modal;
