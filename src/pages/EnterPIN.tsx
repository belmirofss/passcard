import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import AlertSnack from "../components/AlertSnack";
import InputPassword from "../components/InputPassword";
import PrimaryButton from "../components/PrimaryButton";
import TitleAndDescription from "../components/TitleAndDescription";
import PinContext from "../contexts/Pin";

export default function EnterPin() {
  const pinContext = useContext(PinContext);

  const [pin, setPin] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  async function enter() {
    if (!pinContext.login(pin)) {
      setPin("");
      setAlertVisible(true);
    }
  }

  return (
    <>
      <AlertSnack
        message="Wrong PIN!"
        visible={alertVisible}
        onDismiss={() => setAlertVisible(false)}
      />

      <View style={styles.container}>
        <TitleAndDescription
          title="Enter with your PIN"
          description="To view your cards, enter your PIN."
        />

        <View style={styles.content}>
          <InputPassword
            label="PIN"
            password={pin}
            setPassword={setPin}
            autoFocus
          />

          <View style={styles.wrapperEnterButton}>
            <PrimaryButton text="ENTER" onPress={enter} />
          </View>
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
  wrapperEnterButton: {
    marginTop: 12,
  },
  content: {
    marginTop: 12,
  },
});
