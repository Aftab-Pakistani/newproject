import styles from './styles';
import {MainLayout} from '@atoms';
import {radius, spacing} from '@ui';
import { ShortModal } from '@modals';
import {Container} from '@molecules';
import {FlatList} from 'react-native';
import {HeaderSection} from '@organisms';
import {TransactionListCard, TransShortDetail, TransWalletCard} from '@cards';

type Props = {};

const Transactions = ({}: Props) => {
  const _renderItem = ({item}: any) => {
    return (
      <TransactionListCard
        style={{
          elevation: 0.7,
          ...radius.default,
          paddingHorizontal: spacing.S10,
        }}
      />
    );
  };

  return (
    <MainLayout>
      <HeaderSection topComponent={<TransWalletCard />} />
      <Container>
        <FlatList
          style={{marginVertical: spacing.S14}}
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={_renderItem}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </Container>
      <ShortModal isVisible={false}>
       <TransShortDetail/>
      </ShortModal>
    </MainLayout>
  );
};

export default Transactions;
