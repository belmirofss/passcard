import { useNavigation } from "@react-navigation/core";
import { View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { TitleAndDescription } from "../components/TitleAndDescription";
import { theme } from "../theme";

export const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        padding: theme.spacing.l,
        justifyContent: "flex-end",
      }}
    >
      <TitleAndDescription
        title="Welcome!"
        description="PASSCARD helps you to save your card passwords offline and securely"
      />

      <View
        style={{
          marginTop: theme.spacing.m,
        }}
      >
        <PrimaryButton
          text="START"
          onPress={() => navigation.navigate("CreatePin")}
        />
      </View>
    </View>
  );
};
