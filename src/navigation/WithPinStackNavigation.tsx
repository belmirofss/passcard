import React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import EnterPin from "../pages/EnterPIN";

export default function WithPinStackNavigation() {
  const StackNavigator = createStackNavigator();

  const screenOptionStyle: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <StackNavigator.Navigator screenOptions={screenOptionStyle}>
      <StackNavigator.Screen name="EnterPin" component={EnterPin} />
    </StackNavigator.Navigator>
  );
}
