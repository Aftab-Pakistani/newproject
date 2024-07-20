import { MainAppStackTypes } from "@ts";
import { ConnectionList } from "@screens";
import { createStackNavigator } from "@react-navigation/stack";

const ConnectionStack = createStackNavigator<MainAppStackTypes>();

function ConnectionStackNavigator() {
  return (
    <ConnectionStack.Navigator screenOptions={{ headerShown: false }}>
      <ConnectionStack.Screen
        name="ConnectionList"
        component={ConnectionList}
      />
    </ConnectionStack.Navigator>
  );
}

export default ConnectionStackNavigator;
