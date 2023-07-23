import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { COLORS } from "../../constants";
import { theme } from "../../theme";
import { Card } from "../../types";
import { useCards } from "../../hooks/useCards";
import { useNotification } from "../../hooks/useNotification";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { IconButton, Text } from "react-native-paper";

type Props = {
  card: Card;
};

const ICON_SIZE = 20;

export const CardItem = ({ card }: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  const { remove: removeCard } = useCards();
  const { showDialog } = useNotification();
  const navigation = useNavigation();

  const color = COLORS.find((color) => color.color == card.color);

  if (!color) return null;

  return (
    <View
      style={{
        width: "100%",
        height: 100,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
        borderWidth: 4,
        borderColor: theme.colors.primary,
        padding: theme.spacing.l,
        justifyContent: "center",
        shadowColor: theme.colors.primary,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: color.color,
      }}
    >
      <Text
        style={{
          fontSize: theme.fontSizes.l,
          fontWeight: "bold",
          color: color.contrast,
        }}
      >
        {card.name}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="lock"
            color={color.contrast}
            size={ICON_SIZE}
            style={{
              marginRight: theme.spacing.xs,
            }}
          />

          {showPassword ? (
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                flexWrap: "wrap",
                color: color.contrast,
              }}
            >
              {card.password}
            </Text>
          ) : (
            <View
              style={{
                height: 24,
                justifyContent: "center",
              }}
            >
              <View
                style={[
                  { width: 125, height: ICON_SIZE },
                  { backgroundColor: color.contrast },
                ]}
              ></View>
            </View>
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <IconButton
            icon={showPassword ? "eye" : "eye-off"}
            color={color.contrast}
            size={ICON_SIZE}
            onPress={() => setShowPassword(showPassword ? false : true)}
          />

          <IconButton
            icon="pencil-outline"
            color={color.contrast}
            size={ICON_SIZE}
            onPress={() =>
              navigation.navigate("EditCard", {
                card,
              })
            }
          />

          <IconButton
            icon="trash-can-outline"
            color={color.contrast}
            size={ICON_SIZE}
            onPress={() => {
              showDialog(
                "Do you really want to remove the card?",
                `When you remove the card "${card.name}", this action cannot be undone.`,
                () => {
                  if (card.id) {
                    removeCard(card?.id);
                    navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{ name: "Cards" }],
                      })
                    );
                  }
                }
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};
