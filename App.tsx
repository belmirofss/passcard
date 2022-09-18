import React from "react";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/Routes";
import { PinProvider } from "./src/contexts/Pin";
import { theme } from "./src/theme";
import Database from "./src/database";

const paperTheme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    accent: theme.colors.secondary,
    background: theme.colors.secondary,
  },
};

export default function App() {
  new Database();

  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <PinProvider>
          <Routes />
        </PinProvider>
        <StatusBar hidden />
      </NavigationContainer>
    </PaperProvider>
  );
}
