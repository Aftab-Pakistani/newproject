import {Colors, scale, spacing, radius, getWidth, getHeight} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 0,
    height: getHeight(),
    width: getWidth(),
  },
  modalContent: {
    //minHeight: getHeight() - 520,
    width: getWidth(),
    backgroundColor: Colors.white,
    elevation: scale(3),
    padding: scale(20),
    borderTopRightRadius: scale(15),
    borderTopStartRadius: scale(15),
  },
  seprator: {
    height: scale(4),
    backgroundColor: Colors.primary_main,
    marginVertical: spacing.S10,
    width: '18%',
    ...radius.max,
    alignSelf: 'center',
  },
  btnsection: {
    width: getWidth(),
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  btn: {width: '50%', marginBottom: 10},
  title: {
    fontSize: scale(21.5),
    marginTop: spacing.S6,
    marginBottom: spacing.S10,
  },
  desc: {
    fontSize: scale(13),
    marginBottom: spacing.S10,
  },
});

export default styles;
