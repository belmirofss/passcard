import { useState } from "react";
import { View } from "react-native";
import { InputPassword } from "../components/InputPassword";
import { PrimaryButton } from "../components/PrimaryButton";
import { TitleAndDescription } from "../components/TitleAndDescription";
import { useAppContext } from "../hooks/useAppContext";
import { theme } from "../theme";

export const EnterPin = () => {
  const { login } = useAppContext();
  const [pin, setPin] = useState("");

  return (
    <View
      style={{
        flex: 1,
        padding: theme.spacing.l,
        justifyContent: "flex-end",
      }}
    >
      <TitleAndDescription
        title="Enter your PIN"
        description="To enter and see your cards"
      />

      <View
        style={{
          marginTop: theme.spacing.m,
        }}
      >
        <InputPassword label="PIN" value={pin} onChange={setPin} autoFocus />

        <View
          style={{
            marginTop: 12,
          }}
        >
          <PrimaryButton
            text="ENTER"
            onPress={() => {
              login(pin);
              setPin("");
            }}
          />
        </View>
      </View>
    </View>
  );
};
