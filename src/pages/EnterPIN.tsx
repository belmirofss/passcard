import { AdMobInterstitial } from "expo-ads-admob";
import Constants from "expo-constants";
import React, { useContext, useEffect, useState } from "react";
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

  useEffect(() => {
    const testID = "ca-app-pub-3940256099942544/1033173712";
    const productionID = "ca-app-pub-6575307967199593/6000899278";
    const adUnitID = Constants.isDevice && !__DEV__ ? productionID : testID;
    AdMobInterstitial.setAdUnitID(adUnitID).catch((err) => console.log(err));
  }, []);

  async function enter() {
    if (!pinContext.login(pin)) {
      setPin("");
      setAlertVisible(true);
    } else {
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
      await AdMobInterstitial.showAdAsync();
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
