import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { theme } from "../theme";

type Props = {
  icon: any;
  onPress: () => void;
};

export default function IconButton({ icon, onPress }: Props) {
  return (
    <Button
      style={styles.button}
      contentStyle={{
        paddingVertical: 2,
      }}
      theme={{
        roundness: 100,
      }}
      mode="contained"
      onPress={onPress}
    >
      <MaterialCommunityIcons name={icon} size={18} />
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 28,
    marginRight: 4,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: "bold",
    color: theme.colors.secondary,
  },
});
