import {spacing, scale} from '@ui';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {

  },
  textwrap:{
flexDirection:"row",
justifyContent:"space-between",
paddingVertical:spacing.S4
  },
  inner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: scale(20),
  },
  desc: {
    marginTop: spacing.S8,
    fontSize: scale(14.5),
  },
});

export default styles;
