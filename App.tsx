import { StatusBar } from "expo-status-bar";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { AppProvider } from "./src/contexts/App";
import { Routes } from "./src/Routes";
import { NotificationProvider } from "./src/contexts/Notification";
import { theme } from "./src/theme";

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
  return (
    <PaperProvider theme={paperTheme}>
      <NavigationContainer>
        <NotificationProvider>
          <AppProvider>
            <Routes />
          </AppProvider>
        </NotificationProvider>
        <StatusBar hidden />
      </NavigationContainer>
    </PaperProvider>
  );
}
