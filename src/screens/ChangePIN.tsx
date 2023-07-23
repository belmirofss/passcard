import { useNavigation } from "@react-navigation/core";
import { useState } from "react";
import { View } from "react-native";
import { useAppContext } from "../hooks/useAppContext";
import { InputPassword } from "../components/InputPassword";
import { PrimaryButton } from "../components/PrimaryButton";
import { useNotification } from "../hooks/useNotification";
import { theme } from "../theme";

export const ChangePIN = () => {
  const { changePin } = useAppContext();
  const navigation = useNavigation();
  const { showDialog } = useNotification();

  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");

  return (
    <View
      style={{
        flex: 1,
        padding: theme.spacing.l,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View>
        <InputPassword
          label="Current PIN"
          value={currentPin}
          onChange={setCurrentPin}
          maxLength={4}
          autoFocus
        />

        <View
          style={{
            marginTop: theme.spacing.m,
          }}
        >
          <InputPassword
            label="New PIN"
            value={newPin}
            onChange={setNewPin}
            maxLength={4}
          />
        </View>
      </View>

      <PrimaryButton
        text="CHANGE PIN"
        onPress={() =>
          showDialog(
            "Are you sure you want to change the PIN?",
            "Make sure you remember the new PIN. Remember, you will not be able to recover it!",
            () => {
              changePin(newPin).then(() => {
                navigation.navigate("Cards");
              });
            }
          )
        }
      />
    </View>
  );
};
