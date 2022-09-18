import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants";
import { theme } from "../theme";
import { Card } from "../types";

type Props = {
  card: Card;
  showPassword: boolean;
};

export default function CardView({ card, showPassword }: Props) {
  const color = COLORS.find((color) => color.color == card.color);

  if (!color) return null;

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: color.color,
      }}
    >
      <Text
        style={{
          ...styles.nameText,
          color: color.contrast,
        }}
      >
        {card.name}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons
          name="lock"
          color={color.contrast}
          size={18}
          style={{
            marginRight: 4,
          }}
        />

        {showPassword && (
          <Text
            style={{
              ...styles.passwordText,
              color: color.contrast,
            }}
          >
            {card.password}
          </Text>
        )}

        {!showPassword && (
          <View
            style={{
              height: 24,
              justifyContent: "center",
            }}
          >
            <View
              style={[styles.blurredView, { backgroundColor: color.contrast }]}
            ></View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    borderWidth: 3,
    borderColor: theme.colors.primary,
    padding: 16,
    justifyContent: "center",
    shadowColor: theme.colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  passwordText: {
    fontSize: 16,
    fontWeight: "bold",
    flexWrap: "wrap",
  },
  blurredView: {
    width: 125,
    height: 16,
  },
});
