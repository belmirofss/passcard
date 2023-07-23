import { View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { TitleAndDescription } from "../components/TitleAndDescription";
import { useAppContext } from "../hooks/useAppContext";
import { useNotification } from "../hooks/useNotification";
import { theme } from "../theme";

export const ClearAllData = () => {
  const { clearAccount } = useAppContext();
  const { showDialog } = useNotification();

  return (
    <View
      style={{
        flex: 1,
        padding: theme.spacing.l,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TitleAndDescription
        notShowLogo
        title="Do you want to clear all your cards and passwords?"
        description="Remember that everything is saved on your device safely and offline."
      />
      <PrimaryButton
        text="CLEAR ALL DATA"
        onPress={() => {
          showDialog(
            "Again, confirm the action?",
            "When you clear all your cards and passwords, the data cannot be recovered.",
            clearAccount
          );
        }}
      />
    </View>
  );
};
