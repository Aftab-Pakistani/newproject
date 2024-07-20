import { MainAppStackTypes } from "@ts";
import { TabBottomComponent } from "@navigations";
import HomeStackNavigator from "./home_stack_navigator";
import ProfileStackNavigator from "./profile_stack_navigator";
import ConnectionStackNavigator from "./connection_stack_navigator";
import TransactionsStackNavigator from "./transactions_stack_navigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator<MainAppStackTypes>();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false ,tabBarHideOnKeyboard:true}}
      tabBar={(props) => <TabBottomComponent {...props} />}
    >
      <Tab.Screen
        initialParams={{ icon: "home", text: "Home" }}
        name="Home"
        component={HomeStackNavigator}
      />
      <Tab.Screen
        initialParams={{ icon: "connections", text: "Connections" }}
        name="Connections"
        component={ConnectionStackNavigator}
      /> 
      <Tab.Screen
        initialParams={{ icon: "transactions", text: "Transactions" }}
        name="Transactions"
        component={TransactionsStackNavigator}
      />
      <Tab.Screen
        initialParams={{ icon: "profile", text: "Profile" }}
        name="Profile"
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
}
export default BottomTabs;
