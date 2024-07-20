import { ss, useSharedState } from "@helper";
import { ColorTypes, enum_toast, type_toast } from "@ts";
import { Colors } from "@ui";
import React, { ReactNode } from "react";
import { View, ScrollView } from "react-native";
import CustoModal from "react-native-modal";
import styles from "./styles";
import { Button, Typography } from "@molecules";
import { SearchCard } from "@cards";

type Props = {
  title: string;
  name: string;
  isVisible: boolean;
  children: ReactNode;
  titleColor?: keyof ColorTypes;
  onClose?: () => void;
};

export const SuccessModal = ({
  title,
  titleColor,
  isVisible,
  children,
  onClose,
  name,
}: Props) => {
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
        <View style={styles.seprator} />
        <ScrollView>{children}</ScrollView>
      </View>
    </CustoModal>
  );
};

export default SuccessModal;
