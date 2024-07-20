import {Icon, Typography, Link} from '@molecules';
import { StyleProp, View, ViewProps, } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  desc: string;
  onpress?: any;
  style?: StyleProp<ViewProps>
};

export const TransactionListCard = ({title, desc, onpress,style}: Props) => {
  return (
    <View style={[styles.container,style]}>
      <View style={{width:"70%",flexDirection:"row",alignItems:"center"}}>
        <View style={{width:"19%"}}>
      <View style={styles.arrowbox}>
        <Icon width={13} height={15} name="RedArrow" />
      </View>
      </View>
      <View style={{width:"30%"}} >
        <Typography color="primary_main" fontWeight='heavy' style={styles.text}>
          15,600
        </Typography>
        <Typography color="black" style={styles.text2}>
          Jhon Dow
        </Typography>
      </View>
      <View >
        <Typography color="primary_lightest" style={styles.text3}>
          TRX3132444
        </Typography>
        <Typography color="black" style={styles.text2}>
          12 July, 2024
        </Typography>
      </View>
      </View>
      <Link style={{width:"30%",alignItems:"flex-end"}}>
          <Typography color="secondary_main" style={styles.text2} >
            Gold Coin
          </Typography>
        </Link> 
    </View>
  );
};

export default TransactionListCard;
