import React from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { theme } from "../theme";

type Props = {
  text: string;
  onPress: () => void;
};

export default function PrimaryButton({ text, onPress }: Props) {
  return (
    <Button
      style={styles.button}
      contentStyle={{
        paddingVertical: 12,
      }}
      theme={{
        roundness: 100,
      }}
      mode="contained"
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginTop: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: theme.colors.secondary,
  },
});
