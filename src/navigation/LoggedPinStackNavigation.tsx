import { createStackNavigator } from "@react-navigation/stack";
import { Cards } from "../screens/Cards/Cards";
import { CardForm } from "../screens/CardForm";
import { Header } from "../components/Header";
import { ClearAllData } from "../screens/ClearAllData";
import { About } from "../screens/About";
import { ChangePIN } from "../screens/ChangePIN";

export const LoggedPinStackNavigation = () => {
  const StackNavigator = createStackNavigator();

  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Cards"
        component={Cards}
        options={{
          header: () => (
            <Header title="My cards" showNewCardButton showMenuButton />
          ),
        }}
      />
      <StackNavigator.Screen
        name="NewCard"
        component={CardForm}
        options={{
          header: () => <Header title="New card" showBackButton />,
        }}
      />
      <StackNavigator.Screen
        name="EditCard"
        component={CardForm}
        options={{
          header: () => <Header title="Editing card" showBackButton />,
        }}
      />
      <StackNavigator.Screen
        name="ChangePin"
        component={ChangePIN}
        options={{
          header: () => <Header title="Changing PIN" showBackButton />,
        }}
      />
      <StackNavigator.Screen
        name="ClearAllData"
        component={ClearAllData}
        options={{
          header: () => <Header title="Clear all data" showBackButton />,
        }}
      />
      <StackNavigator.Screen
        name="About"
        component={About}
        options={{
          header: () => <Header title="About" showBackButton />,
        }}
      />
    </StackNavigator.Navigator>
  );
};
