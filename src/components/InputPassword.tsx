import React, { useState } from "react";
import { Button, Text, TextInput } from "react-native-paper";
import { theme } from "../theme";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  autoFocus?: boolean;
};

export const InputPassword = ({
  label,
  value,
  onChange,
  maxLength,
  autoFocus,
}: Props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        value={value}
        onChangeText={(text) => onChange(text)}
        keyboardType="numeric"
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoFocus={autoFocus}
        theme={{
          colors: {
            background: theme.colors.secondary,
          },
        }}
        autoComplete="off"
      />

      <Button
        mode="text"
        color={theme.colors.secondary}
        onPress={() => setSecureTextEntry(!secureTextEntry)}
      >
        <Text
          style={{ fontSize: theme.fontSizes.s, color: theme.colors.primary }}
        >
          {secureTextEntry ? "Show password" : "Hide password"}
        </Text>
      </Button>
    </>
  );
};
