import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes/Routes';
import { PinProvider } from './src/contexts/Pin';
import DatabaseInit from './src/database/DatabaseInit';
import { Colors } from './src/enums/Colors';

const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    accent: Colors.SECONDARY,
    background: Colors.SECONDARY
  },
}; 

export default function App() {

  new DatabaseInit();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <PinProvider>
          <Routes />
        </PinProvider>
        <StatusBar />
      </NavigationContainer>
    </PaperProvider>
  );
}