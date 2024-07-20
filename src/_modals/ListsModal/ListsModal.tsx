import { ss, useSharedState } from "@helper";
import { ColorTypes, enum_toast, type_toast } from "@ts";
import { Colors } from "@ui";
import React, { ReactNode, useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import CustoModal from "react-native-modal";
import styles from "./styles";
import { Button, KeyboardAvoidingView, Typography } from "@molecules";
import { SearchCard } from "@cards";

type Props = {
  title: string;
  name?: string;
  btntxt?: string;
  loading?: boolean;
  btnloading?: boolean;
  isVisible: boolean;
  children: ReactNode;
  titleColor?: keyof ColorTypes;
  onClose?: () => void;
  onpress?: any;
  setFiltered?: any;
  data?: any;
  line?: boolean;
  btnDisable?: boolean;
  onlineSearh?: any;
};

export const ListsModal = ({
  title,
  titleColor,
  isVisible,
  loading,
  children,
  onClose,
  btntxt,
  btnloading,
  onpress,
  setFiltered,
  onlineSearh,
  name,
  data,
  line,
  btnDisable,
}: Props) => {
  const [toast, setToast] = useSharedState<type_toast>(ss.toast, {
    message: "",
    title: "",
    visible: false,
    status: enum_toast.error,
  });

  const onCloseModal = () => {
    onClose && onClose();
    setFiltered && setFiltered(data);
    setToast({
      ...toast,
      visible: false,
    });
  };

  useEffect(() => {
    setFiltered && setFiltered(data);
  }, [data]);

  const HandleTextChange = (t: any) => {
    if (!t || t === "") return setFiltered(data);
    else
      setFiltered(
        data?.filter((x: any) =>
          x?.subject
            ? x?.subject?.name?.toLowerCase().indexOf(t.toLowerCase()) !== -1
            : x?.name
            ? x?.name?.toLowerCase().indexOf(t.toLowerCase()) !== -1
            : x?.title?.toLowerCase().indexOf(t.toLowerCase()) !== -1
        )
      );
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
      <KeyboardAvoidingView>
        <View style={styles.modalContent}>
          <View style={styles.notch} />
          {title && (
            <Typography style={styles.title} variant="h2" color={titleColor}>
              {title}
            </Typography>
          )}
          {name && (
            <Typography color="primary_light" style={styles.text}>
              {name}
            </Typography>
          )}

          {(onlineSearh || data) && (
            <SearchCard
              title="Search"
              searchbar={onlineSearh ? onlineSearh : HandleTextChange}
            />
          )}

          {line && !loading && <View style={styles.seprator} />}
          <ScrollView>
            {loading ? <ActivityIndicator color={Colors?.black} /> : children}
          </ScrollView>
        </View>
        <View style={styles.btnsection}>
          <Button
            disabled={btnDisable ? false : true}
            label={btntxt ? btntxt : "Enter"}
            loading={btnloading}
            size={"large"}
            style={styles.btn}
            onPress={onpress ? onpress : onCloseModal}
          />
        </View>
      </KeyboardAvoidingView>
    </CustoModal>
  );
};

export default ListsModal;
