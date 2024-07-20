import {Button, Icon, Typography} from '@molecules';
import {View} from 'react-native';
import styles from './styles';
import {spacing} from '@ui';

type Props = {
  title: string;
  desc?: string;
  onpress?: any;
};

export const TransShortDetail = ({title, desc, onpress}: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.inner}>
        <View>
          <Typography
            color="primary_lightest"
            fontWeight="heavy"
            style={styles.text3}>
            TRX3132444
          </Typography>
          <Typography color="black" style={styles.text2}>
            12 July, 2024
          </Typography>
        </View>
        <View style={styles.arrowbox}>
          <Icon width={13} height={15} name="RedArrow" />
        </View>
      </View>
      <View style={styles.inner}>
        <View>
          <Typography color="black" style={styles.text}>
            Coins
          </Typography>
        </View>
        <Typography
          color="primary_lightest"
          fontWeight="heavy"
          style={styles.text3}>
          15,600
        </Typography>
      </View>
      <View style={styles.inner}>
        <View>
          <Typography color="black" style={styles.text}>
            Received From
          </Typography>
        </View>
        <Typography
          color="primary_lightest"
          style={styles.text3}>
          @mowais
        </Typography>
      </View>
      <Button
        label="Close"
        size="xlarge"
        basic
        style={{marginTop: spacing.S20}}
      />
    </View>
  );
};

export default TransShortDetail;
