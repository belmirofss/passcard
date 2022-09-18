import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ToggleButton } from "react-native-paper";
import { COLORS } from "../constants";
import { theme } from "../theme";

type Props = {
  label: string;
  color: string;
  setColor: (color: string) => void;
};

export default function ColorPicker({ label, color, setColor }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.wrapperColors}>
        {COLORS.map((item) => (
          <ToggleButton
            key={item.color}
            icon={color == item.color ? "check" : ""}
            style={{
              backgroundColor: item.color,
              width: "25%",
              borderColor:
                color == item.color ? theme.colors.primary : "transparent",
              borderWidth: 2,
            }}
            color={item.contrast}
            status={color == item.color ? "checked" : "unchecked"}
            onPress={() => setColor(item.color)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme.colors.secondary,
    borderRadius: 8,
    borderColor: theme.colors.gray,
    borderWidth: 1,
  },
  wrapperColors: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  label: {
    fontSize: 16,
    color: theme.colors.gray,
    marginBottom: 6,
  },
});
