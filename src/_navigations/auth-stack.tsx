import {
  Login,
  OTPVerify,
  Register,
} from "@screens";
import { MainAppStackTypes } from "@ts";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createStackNavigator<MainAppStackTypes>();

function AuthStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Register" component={Register} />
      <Tab.Screen name="OTPVerify" component={OTPVerify} />
    </Tab.Navigator>
  );
}

export default AuthStack;
