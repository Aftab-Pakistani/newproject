import {spacing, scale, Colors, radius} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wallet: {
    height: scale(42),
    width: scale(43),
  },
  walletwrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  walletText: {
    fontSize: scale(12),
  },
  walletText2: {
    fontSize: scale(37),
  },
  walletText3: {
    fontSize: scale(12),
  },
  countText: {
    color: Colors?.white,
    fontSize: scale(12),
    textAlign: 'center',
  },
  plusbtnwrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusBtn: {
    height: scale(31),
    width: scale(31),
    ...radius.default,
    backgroundColor: Colors?.white,
    marginLeft: spacing.S10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinBtn: {
    height: scale(32),
    backgroundColor: Colors?.primary_lightest,
    flexDirection: 'row',
    width: scale(120),
    alignItems: 'center',
    justifyContent: 'center',
    ...radius.default,
  },
  down: {
    marginLeft: spacing.S10,
  },
  plus: {
    marginTop: spacing.S1,
    marginHorizontal: spacing.S8,
  },
});

export default styles;
