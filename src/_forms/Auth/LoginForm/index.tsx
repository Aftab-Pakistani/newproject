import React from 'react';
import {login} from '@services';
import {useFormik} from 'formik';
import {FormLayout} from '@atoms';
import {setStorage} from '@storage';
import {useNavigationHooks} from '@hooks';
import {ss, useSharedState} from '@helper';
import {useMutation} from '@tanstack/react-query';
import {loginFromValidation} from '@validations';
import {LoginTypes, MainAppStackTypes, MyAccountTypes} from '@ts';
import {
  Button,
  ButtonGroup,
  Container,
  Icon,
  Input,
  Link,
  Typography,
} from '@molecules';
import {Pressable, View} from 'react-native';
import {Colors, radius, scale, spacing} from '@ui';
import styles from './styles';

const LoginForm = () => {
  const {navigate} = useNavigationHooks<MainAppStackTypes>();
  const {mutateAsync: onLogin, isLoading} = useMutation({
    mutationFn: login,
  });
  const [auth, setAuth] = useSharedState<any>(ss.auth, null);

  const {values, errors, handleSubmit, setFieldValue, setValues} =
    useFormik<LoginTypes>({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: loginFromValidation,
      validateOnChange: false,
      onSubmit: data => onLogin(data),
    });

  const onSubmit = async () => {
    onLogin(values)
      .then((data: any) => {
        const dataObj: MyAccountTypes = {
          token: data.access_token,
          profile: data.user,
        };
        setStorage('auth', dataObj);
        setAuth(dataObj);
      })
      .catch();
  };

  const onChange = (name: string, value: string) => {
    setFieldValue(name, value);
  };

  const onForgotPassword = () => {
    navigate('ForgetPassword');
  };

  const onPressSignup = () => {
    navigate('Register');
  };

  return (
    <FormLayout
      heading="Login"
      description="Login by providing your email address"
      disableScroll
      buttons={
        <ButtonGroup>
          <Button
            color="primary_main"
            label="LOGIN"
            size="large"
            onPress={onSubmit}
            loading={isLoading}
          />
          <Button
            basic
            size="large"
            color="primary_main"
            label="SIGNUP"
            onPress={onPressSignup}
          />
        </ButtonGroup>
      }
      faceidButton={
        <Container style={styles.btnwrap}>
          <Typography variant="h4" fontWeight="bold" color="primary_light">
            OR
          </Typography>
          <Pressable style={styles.btn}>
            <View style={styles.textwrap}>
              <Icon name="FaceID" width={25} height={25} />
              <Typography variant="h4" style={styles.btnText}>
                LOGIN BY Face ID
              </Typography>
            </View>
          </Pressable>
        </Container>
      }>
      <Input
        inputMode="email"
        autoComplete="email"
        value={values.email}
        autoCapitalize="none"
        label={'Email address'}
        keyboardType="email-address"
        placeholder="jhon@domain.com"
        onChangeText={(value: string) => onChange('email', value)}
      />
      <Input
        password
        placeholder=""
        label={'Password'}
        autoCapitalize="none"
        value={values.password}
        keyboardType="visible-password"
        onChangeText={(value: string) => onChange('password', value)}
      />
      <Link
        color="body"
        onPress={onForgotPassword}
        style={{alignSelf: 'flex-end'}}>
        Forgot Password?
      </Link>
    </FormLayout>
  );
};

export default LoginForm;
