import {Icon, Section, Typography} from '@molecules';
import {View} from 'react-native';
import styles from './styles';
import {scale} from '@ui';

type Props = {
  title: string;
  desc?: string;
  onpress?: any;
};

export const TransWalletCard = ({title, desc, onpress}: Props) => {
  return (
    <View>
      <Typography color="white" fontWeight="heavy" style={styles.title}>
        Transactions
      </Typography>
      <View style={styles.walletwrap}>
        <Section noHorizontalPadding>
          <Typography color="white" style={styles.walletText}>
            Wallet Balence
          </Typography>
          <View style={styles.plusbtnwrap}>
            <Typography
              color="white"
              fontWeight="heavy"
              style={styles.walletText2}>
              2500
            </Typography>
          </View>
        </Section>
        <View style={styles.coinBtn}>
          <Typography color="white" style={styles.walletText3}>
            Gold Coin
          </Typography>
          <Icon
            name="Down"
            width={scale(15)}
            height={scale(15)}
            style={styles.down}
          />
        </View>
      </View>
    </View>
  );
};

export default TransWalletCard;
