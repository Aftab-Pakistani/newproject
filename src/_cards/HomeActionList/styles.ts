import {spacing, scale, radius, Colors} from '@ui';
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
  iconWrap: {
    marginTop: -spacing.S36,
    flexDirection: 'row',
    elevation: 1,
    width: '100%',
    height: scale(81),
    ...radius.default,
    backgroundColor: Colors?.white,
    alignSelf: 'center',
  },
  iconText: {
    fontSize: scale(13),
    marginTop: spacing.S10,
  },
  iconBtn: {width: '25%', justifyContent: 'center', alignItems: 'center'},
});

export default styles;
