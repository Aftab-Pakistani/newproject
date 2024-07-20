import {ss, useSharedState} from '@helper';
import {ColorTypes, enum_toast, type_toast} from '@ts';
import {Colors} from '@ui';
import {ReactNode} from 'react';
import {StatusBar, View} from 'react-native';
import CustoModal from 'react-native-modal';
import styles from './styles';
import {Typography} from '@molecules';

type Props = {
  title: string;
  desc: string;
  isVisible: boolean;
  children?: ReactNode;
  titleColor?: keyof ColorTypes;
  onClose: () => void;
};

export const ShortModal = ({
  title,
  desc,
  titleColor,
  isVisible,
  children,
  onClose,
}: Props) => {
  const [toast, setToast] = useSharedState<type_toast>(ss.toast, {
    message: '',
    title: '',
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
      backdropOpacity={0.5}
      animationInTiming={290}
      swipeDirection={'down'}
      animationOutTiming={290}
      style={styles.container}
      onBackdropPress={onCloseModal}
      onSwipeComplete={onCloseModal}
      onBackButtonPress={onCloseModal}
      backdropColor={Colors.primary_darker}>
      <View style={styles.modalContent}>
        {title && (
          <Typography
            style={styles.title}
            fontWeight={'heavy'}
            color="primary_main">
            {title}
          </Typography>
        )}
        {desc && (
          <Typography style={styles.desc} color="body">
            {desc}
          </Typography>
        )}
        {children}
      </View>
    </CustoModal>
  );
};

export default ShortModal;
