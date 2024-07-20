import {MainLayout} from '@atoms';
import React, {useEffect} from 'react';
import {HttpResponseDataType} from '@ts';
import {MyEnrollments} from '@organisms';
import {fetchProfileEnrollments} from '@services';
import {useMutation} from '@tanstack/react-query';
import {Container, Typography} from '@molecules';

type Props = {};

const Profile = ({}: Props) => {
  return (
    <MainLayout title="Profile">
      <Container>
        <Typography>Profile</Typography>
      </Container>
    </MainLayout>
  );
};

export default Profile;
