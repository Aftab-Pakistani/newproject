import {Button, ButtonGroup, Icon, Section, Typography} from '@molecules';
import {Image, View} from 'react-native';
import styles from './styles';
import {scale, spacing} from '@ui';
import {images} from '@assets';

type Props = {
  title: string;
  desc?: string;
  onpress?: any;
};

export const HomeActionList = ({title, desc, onpress}: Props) => {
  return (
    <View style={styles.iconWrap}>
    <View style={styles.iconBtn}>
      <Icon name="PlusBox" width={scale(31)} height={scale(31)} />
      <Typography color="black" fontWeight="bold" style={styles.iconText}>
        Gold Coin
      </Typography>
    </View>
    <View style={styles.iconBtn}>
      <Icon name="Withdraw" width={scale(31)} height={scale(31)} />
      <Typography color="black" fontWeight="bold" style={styles.iconText}>
        Withdraw
      </Typography>
    </View>
    <View style={styles.iconBtn}>
      <Icon name="Request" width={scale(31)} height={scale(31)} />
      <Typography color="black" fontWeight="bold" style={styles.iconText}>
        Request
      </Typography>
    </View>
    <View style={styles.iconBtn}>
      <Icon name="Send" width={scale(31)} height={scale(31)} />
      <Typography color="black" fontWeight="bold" style={styles.iconText}>
        Send
      </Typography>
    </View>
  </View>
  );
};

export default HomeActionList;
