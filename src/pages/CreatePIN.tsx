import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";

import PinContext from "../contexts/Pin";
import TitleAndDescription from "../components/TitleAndDescription";
import InputPassword from "../components/InputPassword";
import AlertSnack from "../components/AlertSnack";
import PrimaryButton from "../components/PrimaryButton";
import ConfirmDialog from "../components/ConfirmDialog";

export default function CreatePin() {
  const pinContext = useContext(PinContext);

  const [pin, setPin] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [visibleConfirmPin, setVisibleConfirmPin] = useState(false);

  function create() {
    setVisibleConfirmPin(false);

    if (!pin || !pin?.match(/^[0-9]+$/)) {
      setPin("");
      setAlertMessage("PIN is invalid!");
      setAlertVisible(true);
      return;
    }

    pinContext.savePin(pin);
  }

  return (
    <>
      <AlertSnack
        message={alertMessage}
        visible={alertVisible}
        onDismiss={() => setAlertVisible(false)}
      />

      <ConfirmDialog
        title="Do you confirm that you will remember the PIN created?"
        paragraph="Remember, you will not be able to recover it!"
        visible={visibleConfirmPin}
        onDismiss={() => setVisibleConfirmPin(false)}
        onYes={create}
        onNo={() => setVisibleConfirmPin(false)}
      />

      <View style={styles.container}>
        <TitleAndDescription
          title="Create your PIN"
          description="For your security, enter a PIN. Remember not to miss it. It will be used for your access."
        />

        <InputPassword
          label="PIN"
          password={pin}
          setPassword={setPin}
          autoFocus
        />

        <View style={styles.wrapperCreateButton}>
          <PrimaryButton
            text="CREATE"
            onPress={() => setVisibleConfirmPin(true)}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
  },
  wrapperCreateButton: {
    marginTop: 12,
  },
});
