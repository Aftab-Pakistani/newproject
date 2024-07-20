import { Profile } from "@screens";
import { MainAppStackTypes } from "@ts";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator<MainAppStackTypes>();

function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen
        // initialParams={{ icon: "home", text: "home" }}
        name="Profile"
        component={Profile}
      />
    </ProfileStack.Navigator>
  );
}

export default ProfileStackNavigator;
