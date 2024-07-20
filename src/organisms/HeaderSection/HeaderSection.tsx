import {spacing} from '@ui';
import styles from './styles';
import {ReactNode} from 'react';
import {View} from 'react-native';
import {Container} from '@molecules';
import {HomeActionList, HomeTopButtonCard} from '@cards';

type Props = {
  btnLists?: boolean;
  buttons?: boolean;
  topComponent?: ReactNode;
  secondComponent?: ReactNode;
  thirdComponent?: ReactNode;
};

const HeaderSection = ({
  btnLists,
  buttons,
  topComponent,
  secondComponent,
  thirdComponent,
}: Props) => {
  return (
    <>
      <View
        style={[
          styles.main,
          {paddingBottom: btnLists ? spacing.S44 : spacing.S16},
        ]}>
        <Container>
          {topComponent}
          {buttons && <HomeTopButtonCard />}
        </Container>
      </View>
      {btnLists && (
        <Container>
          <HomeActionList />
        </Container>
      )}
    </>
  );
};

export default HeaderSection;
