import {useMemo} from 'react';
import {Splash} from '@screens';
import {getStorage} from '@storage';
import AuthStack from './auth-stack';
import BottomTabs from './bottom_tabs';
import {ss, useSharedState} from '@helper';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainStack() {
  const [auth, setAuth] = useSharedState<any>(ss.auth, null);

  useMemo(async () => {
    const authToken = await getStorage('auth');
    setAuth(authToken);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={Splash} />
      {!auth ? (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      ) : (
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
      )}
    </Stack.Navigator>
  );
}

export default MainStack;
