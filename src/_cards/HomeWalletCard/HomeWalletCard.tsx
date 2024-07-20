import {Button, Icon, Section, Typography} from '@molecules';
import {Image, View} from 'react-native';
import styles from './styles';
import {scale, spacing} from '@ui';
import {images} from '@assets';

type Props = {
  title: string;
  desc?: string;
  onpress?: any;
};

export const HomeWalletCard = ({title, desc, onpress}: Props) => {
  return (
    <View>
      <Image source={images.wallet} style={styles.wallet} />
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
            <View style={styles.plusBtn}>
              <Icon
                name="Plus"
                width={scale(18)}
                height={scale(18)}
                style={styles.plus}
              />
            </View>
          </View>
          <Typography color="white" style={styles.walletText3}>
            Last Updated 20 min ago
          </Typography>
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

export default HomeWalletCard;
