
import {MainAppStackTypes} from '@ts';
import {createStackNavigator} from '@react-navigation/stack';
import { Home } from '@screens';

const HomeStacNavigator = createStackNavigator<MainAppStackTypes>();

function HomeStackNavigator() {
  return (
    <HomeStacNavigator.Navigator screenOptions={{headerShown: false}}>
      <HomeStacNavigator.Screen name="Home" component={Home} />
    </HomeStacNavigator.Navigator>
  );
}

export default HomeStackNavigator;
