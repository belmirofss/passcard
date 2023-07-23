import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { deleteAllCards } from "../api/cards";
import ConfirmDialog from "../components/ConfirmDialog";
import PrimaryButton from "../components/PrimaryButton";
import TitleAndDescription from "../components/TitleAndDescription";
import PinContext from "../contexts/Pin";

export default function ClearAllData() {
  const pinContext = useContext(PinContext);

  const [visibleConfirmClearAllData, setVisibleConfirmClearAllData] =
    useState(false);

  async function clearAllData() {
    await deleteAllCards();
    await pinContext.clearPin();
  }

  return (
    <>
      <ConfirmDialog
        title="Again, confirm the action?"
        paragraph="When you clear all your cards and passwords, the data cannot be recovered."
        visible={visibleConfirmClearAllData}
        onDismiss={() => setVisibleConfirmClearAllData(false)}
        onYes={clearAllData}
        onNo={() => setVisibleConfirmClearAllData(false)}
      />

      <View style={styles.container}>
        <TitleAndDescription
          notShowLogo
          title="Do you want to clear all your cards and passwords?"
          description="Remember that everything is saved on your device safely and offline."
        />
        <PrimaryButton
          text="CLEAR ALL DATA"
          onPress={() => setVisibleConfirmClearAllData(true)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
