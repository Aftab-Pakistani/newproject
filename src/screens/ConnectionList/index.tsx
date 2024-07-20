import {MainLayout} from '@atoms';
import { ConnTopCard, NotfoundConnCard } from '@cards';
import {Container, Typography} from '@molecules';
import {HeaderSection} from '@organisms';

type Props = {};

const ConnectionList = ({}: Props) => {
  return (
    <MainLayout >
       <HeaderSection topComponent={<ConnTopCard/> } />
       <Container>
        <NotfoundConnCard />
      </Container>
    </MainLayout>
  );
};

export default ConnectionList;
