import {spacing, scale, Colors, radius} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.S14,
    paddingBottom: spacing.S10,
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(22.5),
    marginTop: spacing.S10,
  },
  desc: {
    marginTop: spacing.S8,
    fontSize: scale(14.5),
  },
  arrowbtn: {
    backgroundColor: Colors?.white,
    flexDirection: 'row',
    height: scale(55),
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    ...radius.default,
  },
  arrowText: {
    fontSize: scale(18),
    marginLeft: spacing.S10,
  },
});

export default styles;
