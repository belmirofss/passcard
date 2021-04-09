import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes/Routes';
import { PinProvider } from './src/contexts/Pin';
import DatabaseInit from './src/database/DatabaseInit';

const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2b2b2b',
    accent: '#d9d9d9',
    background: '#d9d9d9'
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
        <StatusBar hidden />
      </NavigationContainer>
    </PaperProvider>
  );
}