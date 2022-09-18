import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "./Logo";

type Props = {
  title: string;
  description?: string;
  notShowLogo?: boolean;
};

export default function TitleAndDescription({
  title,
  description,
  notShowLogo,
}: Props) {
  return (
    <View>
      {!notShowLogo && (
        <View style={styles.wrapperLogo}>
          <Logo />
        </View>
      )}
      <Text style={styles.titleText}>{title}</Text>
      {description && <Text style={styles.descriptionText}>{description}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapperLogo: {
    marginBottom: 12,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 18,
  },
});
