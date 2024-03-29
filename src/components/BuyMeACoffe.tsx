import { Image } from "react-native";
import { Banner } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import BUY_ME_A_COFFEEE from "../images/buy_me_a_coffee.png";
import { theme } from "../theme";
import { BUY_ME_A_COFFEE_URL } from "../constants";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "PASSCARD.BUY_ME_A_COFFEE";
const TEN_DAYS_MS = 1000 * 60 * 60 * 24 * 10;

export const BuyMeACoffe = () => {
  const [visible, setVisible] = useState(false);

  const open = async () =>
    await WebBrowser.openBrowserAsync(BUY_ME_A_COFFEE_URL);

  const dismiss = async () => {
    setVisible(false);
    AsyncStorage.setItem(KEY, new Date().toISOString());
  };

  const loadVisible = async () => {
    const dismissDate: string = (await AsyncStorage.getItem(KEY)) || "";
    const diff = new Date().getTime() - new Date(dismissDate).getTime();

    setVisible(Boolean(!dismissDate || diff > TEN_DAYS_MS));
  };

  useEffect(() => {
    loadVisible();
  }, []);

  if (!visible) return null;

  return (
    <Banner
      visible
      actions={[
        {
          label: "Not now",
          onPress: dismiss,
        },
        {
          label: "Buy me a coffee",
          onPress: open,
        },
      ]}
      icon={() => (
        <Image
          source={BUY_ME_A_COFFEEE}
          style={{
            width: 75,
            height: 75,
          }}
        />
      )}
      style={{
        backgroundColor: theme.colors.secondary,
      }}
    >
      We do not show ads. If you've enjoyed using this app, consider buying me a
      coffee as a token of appreciation.
    </Banner>
  );
};
