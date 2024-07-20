import {Button, Typography} from '@molecules';
import {View} from 'react-native';
import styles from './styles';
import {spacing} from '@ui';
import {ContextTitleCard} from '@cards';

type Props = {
  wallet: string;
  onpress?: any;
};

export const SendCoinSend = ({wallet, onpress}: Props) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.textwrap}>
        <Typography style={styles.title}>Current Wallet Balence</Typography>
        <Typography style={styles.title} fontWeight="heavy">
          2500
        </Typography>
      </View>
      <ContextTitleCard
        //onchangeText={}
        // searchValue={}
        search
        title={'Enter Coins'}
        desc={'Senior Front End Developer'}
      />
      <ContextTitleCard
        title={'Gold Coins'}
        //onpress={}
      />
      <ContextTitleCard
        title={'Muhammad Owais'}
        desc={'@mowais.ac'}
        //onpress={}
      />
      <Button
        label="Invite new Contact"
        color="primary_lighter"
        dark
        size="large"
        style={{marginTop: spacing.S12}}
      />
      <Button
        label="SEND COINS"
        size="xlarge"
        style={{marginTop: spacing.S16}}
      />
    </View>
  );
};

export default SendCoinSend;
