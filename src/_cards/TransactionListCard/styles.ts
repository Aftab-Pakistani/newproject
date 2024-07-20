import {Colors, spacing, radius, scale} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 1,
    flexDirection: 'row',
    paddingVertical: spacing.S10,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
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
    fontSize: scale(17.5),
  },
  text2: {
    fontSize: scale(13),
  },
  text3: {
    fontSize: scale(14),
  },
});

export default styles;
