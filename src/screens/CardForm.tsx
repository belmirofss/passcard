import {
  RouteProp,
  useNavigation,
  useRoute,
  CommonActions,
} from "@react-navigation/core";
import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import { theme } from "../theme";
import { Card } from "../types";
import { InputPassword } from "../components/InputPassword";
import { ColorPicker } from "../components/ColorPicker";
import { PrimaryButton } from "../components/PrimaryButton";
import { useCards } from "../hooks/useCards";
import { MAX_LENGTH_NAME, MAX_LENGTH_PASSWORD } from "../constants";

type ParamList = {
  Card: {
    card: Card;
  };
};

export const CardForm = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, "Card">>();
  const card = route.params?.card;

  const { save } = useCards();
  const [name, setName] = useState(card?.name || "");
  const [password, setPassword] = useState(card?.password || "");
  const [color, setColor] = useState(card?.color || "");

  return (
    <View
      style={{
        flex: 1,
        padding: theme.spacing.l,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
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

        <View
          style={{
            marginTop: theme.spacing.m,
          }}
        >
          <InputPassword
            label="Password"
            value={password}
            onChange={setPassword}
            maxLength={MAX_LENGTH_PASSWORD}
          />
        </View>

        <View
          style={{
            marginTop: theme.spacing.m,
          }}
        >
          <ColorPicker label="Color" color={color} setColor={setColor} />
        </View>
      </View>

      <PrimaryButton
        text="SAVE"
        onPress={() => {
          save({
            id: card?.id,
            name,
            password,
            color,
          }).then(() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: "Cards" }],
              })
            );
          });
        }}
      />
    </View>
  );
};
