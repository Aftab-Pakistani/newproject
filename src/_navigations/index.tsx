import React from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import MainStack from "./main-stack";
import { ss, useSharedState } from "@helper";
import { enum_toast, type_toast } from "@ts";
import { Modal, Typography } from "@molecules";

export const navigation = createNavigationContainerRef();

let onToastShow: any = null;

export const modalShow = (value: string) => {
  onToastShow(value);
};

const NavigationApp = () => {
  const [toast, setToast] = useSharedState<type_toast>(ss.toast, {
    message: "",
    title: "",
    visible: false,
    status: enum_toast.default,
  });
  onToastShow = (value: string) => {
    setToast({
      message: value,
      title: "Erorr",
      visible: true,
      status: enum_toast.error,
    });
  };

  return (
    <NavigationContainer ref={navigation}>
      {/* Global Modal */}
      <Modal title={"Error"} titleColor="red" isVisible={toast.visible}>
        <Typography>{toast.message}</Typography>
      </Modal>
      <MainStack />
    </NavigationContainer>
  );
};

export default NavigationApp;

export * from "./TabBottomComponent/TabBottomComponent";
