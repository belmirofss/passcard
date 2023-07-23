import { View } from "react-native";
import appInfo from "../../app.json";
import { TitleAndDescription } from "../components/TitleAndDescription";
import { theme } from "../theme";
import { Text } from "react-native-paper";

export const About = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: theme.spacing.l,
      }}
    >
      <TitleAndDescription
        title="The app saves your card passwords offline."
        description="All your cards passwords are saved only and exclusively on your device. The app will never save or collect any information."
      />

      <Text
        style={{
          fontSize: theme.fontSizes.s,
          marginTop: theme.spacing.l,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Version: {appInfo.expo.version}
      </Text>
    </View>
  );
};
