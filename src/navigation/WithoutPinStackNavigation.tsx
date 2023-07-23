import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { Welcome } from "../screens/Welcome";
import { CreatePin } from "../screens/CreatePIN";

export const WithoutPinStackNavigation = () => {
  const StackNavigator = createStackNavigator();

  const screenOptionStyle: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <StackNavigator.Navigator screenOptions={screenOptionStyle}>
      <StackNavigator.Screen name="Welcome" component={Welcome} />
      <StackNavigator.Screen name="CreatePin" component={CreatePin} />
    </StackNavigator.Navigator>
  );
};
