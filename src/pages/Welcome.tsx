import { useNavigation } from "@react-navigation/core";
import React from "react";
import { StyleSheet, View } from "react-native";

import PrimaryButton from "../components/PrimaryButton";
import TitleAndDescription from "../components/TitleAndDescription";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TitleAndDescription
        title="Welcome!"
        description="PASSCARD saves your cards passwords offline and securely. All data only in your smartphone."
      />

      <View style={styles.wrapperStartButton}>
        <PrimaryButton
          text="START"
          onPress={() => navigation.navigate("CreatePin" as never)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
  },
  wrapperStartButton: {
    marginTop: 12,
  },
});
