import { createStackNavigator } from "@react-navigation/stack";
import { Transactions } from "@screens";


const TransactionsStack = createStackNavigator();

function TransactionsStackNavigator() {
  return (
    <TransactionsStack.Navigator screenOptions={{ headerShown: false }}>
      <TransactionsStack.Screen
        // initialParams={{ icon: "home", text: "home" }}
        name="Transactions"
        component={Transactions}
      />
    </TransactionsStack.Navigator>
  );
}

export default TransactionsStackNavigator;
