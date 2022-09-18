import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { theme } from "../theme";

type Props = {
  label: string;
  password: string;
  setPassword: (password: string) => void;
  maxLength?: number;
  autoFocus?: boolean;
};

export default function InputPassword({
  label,
  password,
  setPassword,
  maxLength,
  autoFocus,
}: Props) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        value={password}
        onChangeText={(text) => setPassword(text)}
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
        labelStyle={styles.button}
      >
        {secureTextEntry ? "Show password" : "Hide password"}
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    color: theme.colors.primary,
    fontSize: 11,
  },
});
