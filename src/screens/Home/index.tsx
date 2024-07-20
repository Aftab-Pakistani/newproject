import {MainLayout} from '@atoms';
import {
  ContextTitleCard,
  HomeWalletCard,
  InvitationCard,
  NotfoundConnCard,
  PendingRequestCard,
  SendCoinSend,
  TransactionListCard,
} from '@cards';
import {Button, Container, Select, Typography} from '@molecules';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {HeaderSection} from '@organisms';
import {ShortModal} from '@modals';
import {Colors, fonts, scale, spacing} from '@ui';

// type Props = {};

const Home = () => {
  const _renderItem = ({item}: any) => {
    return (
      <TransactionListCard
        style={{borderColor: Colors.primary_lightest, borderBottomWidth: 0.2}}
      />
    );
  };

  return (
    <MainLayout>
      <HeaderSection btnLists topComponent={<HomeWalletCard />} />
      <Container>
        <NotfoundConnCard />
      </Container>
      {/* <Container>
        <Select label="Pending Request">
          <PendingRequestCard />
        </Select>
      </Container> */}
      <Container style={styles.transctionwrap}>
        <View style={styles.transactions}>
          <Typography style={styles.text} fontWeight="heavy">
            Last 5 Transcations
          </Typography>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={_renderItem}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </Container>
      <ShortModal title="Add Coins" isVisible={false}>
        <ContextTitleCard
          search
          title={'Enter Coins'}
          //onchangeText={}
          // searchValue={}
          style={{fontSize: scale(22), fontFamily: fonts.Heavy}}
          desc={'Senior Front End Developer'}
        />
        <ContextTitleCard
          title={'Gold Coins'}
          //onpress={}
        />
        <Button
          size="xlarge"
          label="ADD COINS"
          style={{marginTop: spacing.S16}}
        />
      </ShortModal>
      <ShortModal title="Withdraw Coins" isVisible={false}>
        <ContextTitleCard
          search
          title={'Enter Coins'}
          //onchangeText={}
          // searchValue={}
          desc={'Senior Front End Developer'}
        />
        <ContextTitleCard
          title={'Gold Coins'}
          //onpress={}
        />
        <Button
          size="xlarge"
          label="REQUEST COINS"
          style={{marginTop: spacing.S16}}
        />
      </ShortModal>
      <ShortModal title="Request Coins" isVisible={false}>
        <ContextTitleCard
          search
          title={'Enter Coins'}
          //onchangeText={}
          // searchValue={}
          desc={'Senior Front End Developer'}
        />
        <ContextTitleCard
          title={'Gold Coins'}
          //onpress={}
        />
        <ContextTitleCard
          desc={'@mowais.ac'}
          title={'Muhammad Owais'}
          //onpress={}
        />
        <Button
          dark
          size="large"
          color="primary_lighter"
          label="Invite new Contact"
          style={{marginTop: spacing.S12}}
        />
        <Button
          size="xlarge"
          label="REQUEST COINS"
          style={{marginTop: spacing.S16}}
        />
      </ShortModal>
      <ShortModal title="Send Coins" isVisible={false}>
        <SendCoinSend />
      </ShortModal>
      <ShortModal title="Invite New Contact" isVisible={false}>
        <ContextTitleCard
          search
          title={'Full Name'}
          //onchangeText={}
          // searchValue={}
          desc={''}
        />
        <ContextTitleCard
          icon
          search
          title={'User Name'}
          //onchangeText={}
          // searchValue={}
          desc={''}
        />
        <ContextTitleCard
          search
          title={'Phone'}
          //onchangeText={}
          // searchValue={}
          desc={''}
        />
        <Button label="INVITE" size="xlarge" style={{marginTop: spacing.S16}} />
      </ShortModal>
      <ShortModal
        title="Set Passcode"
        desc="The Passcode you use to login without entering a password."
        isVisible={false}>
        <ContextTitleCard
          search
          title={'Enter Passcode'}
          //onchangeText={}
          // searchValue={}
          style={{letterSpacing: scale(15)}}
          desc={'Senior Front End Developer'}
        />
        <Button
          label="SET PASSCODE"
          size="xlarge"
          style={{marginTop: spacing.S16}}
        />
      </ShortModal>
      <ShortModal isVisible={false}>
        <InvitationCard />
      </ShortModal>
    </MainLayout>
  );
};

export default Home;
