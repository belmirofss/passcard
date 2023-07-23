import { useState } from "react";
import { View } from "react-native";
import { useAppContext } from "../hooks/useAppContext";
import { TitleAndDescription } from "../components/TitleAndDescription";
import { InputPassword } from "../components/InputPassword";
import { PrimaryButton } from "../components/PrimaryButton";
import { useNotification } from "../hooks/useNotification";
import { theme } from "../theme";

export const CreatePin = () => {
  const { savePin } = useAppContext();
  const [pin, setPin] = useState("");
  const { showDialog } = useNotification();

  return (
    <View
      style={{
        flex: 1,
        padding: theme.spacing.l,
        justifyContent: "flex-end",
      }}
    >
      <TitleAndDescription
        title="Create your PIN"
        description="For your security, enter a PIN. Remember not to lozs it. It will be used for your access"
      />

      <View
        style={{
          marginTop: theme.spacing.m,
        }}
      >
        <InputPassword label="PIN" value={pin} onChange={setPin} autoFocus />

        <View
          style={{
            marginTop: theme.spacing.m,
          }}
        >
          <PrimaryButton
            text="CREATE"
            onPress={() => {
              showDialog(
                "Do you confirm that you will remember the this PIN?",
                "You will not be able to recover it!",
                () => savePin(pin)
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
