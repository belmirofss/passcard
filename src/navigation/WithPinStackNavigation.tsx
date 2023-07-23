import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { EnterPin } from "../screens/EnterPIN";

export const WithPinStackNavigation = () => {
  const StackNavigator = createStackNavigator();

  const screenOptionStyle: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <StackNavigator.Navigator screenOptions={screenOptionStyle}>
      <StackNavigator.Screen name="EnterPin" component={EnterPin} />
    </StackNavigator.Navigator>
  );
};
