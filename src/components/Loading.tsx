import { ActivityIndicator, View } from "react-native";
import { theme } from "../theme";

export const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        height: "100%",
      }}
    >
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};
