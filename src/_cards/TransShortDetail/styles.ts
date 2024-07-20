import {spacing, scale, radius, Colors} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.S14,
    paddingBottom: spacing.S10,
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:"row",
    marginBottom:spacing.S14
  },
  title: {
    fontSize: scale(22.5),
    marginTop: spacing.S10,
  },
  desc: {
    marginTop: spacing.S8,
    fontSize: scale(14.5),
  },
  arrowbox: {
    ...radius.full,
    width: scale(40),
    height: scale(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors?.lightRed,
  },
  text: {
    fontSize: scale(17),
  },
  text2: {
    fontSize: scale(14.5),
  },
  text3: {
    fontSize: scale(21),
  },
});

export default styles;
