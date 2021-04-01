import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from "@react-navigation/native";

import Routes from './src/routes/Routes';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar hidden />
      </NavigationContainer>
    </PaperProvider>
  );
}