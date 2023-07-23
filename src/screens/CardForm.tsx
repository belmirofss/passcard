import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-paper";
import { createCard, updateCard } from "../api/cards";
import AlertSnack from "../components/AlertSnack";
import ColorPicker from "../components/ColorPicker";
import InputPassword from "../components/InputPassword";
import PrimaryButton from "../components/PrimaryButton";
import { MAX_LENGTH_NAME, MAX_LENGTH_PASSWORD } from "../constants";
import { theme } from "../theme";
import { Card } from "../types";

type ParamList = {
  Card: {
    card: Card;
  };
};

export default function CardForm() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "Card">>();
  const card = route.params?.card;

  const [name, setName] = useState(card?.name || "");
  const [password, setPassword] = useState(card?.password || "");
  const [color, setColor] = useState(card?.color || "");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  async function save(): Promise<void> {
    if (!name || !password) {
      setAlertMessage("There are fields not informe. Please inform them!");
      setAlertVisible(true);
      return;
    }

    if (!color) {
      setAlertMessage("No color selected. Please select one!");
      setAlertVisible(true);
      return;
    }

    if (name.length > MAX_LENGTH_NAME) {
      setAlertMessage("You named the card too big. Please put a smaller one!");
      setAlertVisible(true);
      return;
    }

    if (password.length > MAX_LENGTH_PASSWORD) {
      setAlertMessage(
        "The password entered is too large. Wouldn't it be smaller?"
      );
      setAlertVisible(true);
      return;
    }

    if (!password.match(/^[0-9]+$/)) {
      setAlertMessage(
        "Password is invalid. Please enter only numeric characters."
      );
      setAlertVisible(true);
      return;
    }

    if (card?.id) {
      await updateCard(card.id, {
        name,
        password,
        color,
      });
    } else {
      await createCard({
        name,
        password,
        color,
      });
    }

    navigation.navigate("Cards", {
      message: card?.id
        ? "Card edited successfully!"
        : "Card created successfully!",
    });
  }

  return (
    <>
      <AlertSnack
        message={alertMessage}
        visible={alertVisible}
        onDismiss={() => setAlertVisible(false)}
      />

      <View style={styles.container}>
        <View>
          <TextInput
            mode="outlined"
            label="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            maxLength={MAX_LENGTH_NAME}
            autoFocus
            autoCorrect={false}
            theme={{
              colors: {
                background: theme.colors.secondary,
              },
            }}
            autoComplete="off"
          />

          <View style={styles.wrapperInputPassword}>
            <InputPassword
              label="Password"
              password={password}
              setPassword={setPassword}
              maxLength={MAX_LENGTH_PASSWORD}
            />
          </View>

          <View style={styles.wrapperColorPicker}>
            <ColorPicker label="Color" color={color} setColor={setColor} />
          </View>
        </View>

        <PrimaryButton text="SAVE" onPress={save} />
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
  wrapperInputPassword: {
    marginTop: 12,
  },
  wrapperColorPicker: {
    marginTop: 12,
  },
});
