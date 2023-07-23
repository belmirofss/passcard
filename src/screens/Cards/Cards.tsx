import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { theme } from "../../theme";
import { CardItem } from "./CardItem";
import { useCards } from "../../hooks/useCards";
import { Loading } from "../../components/Loading";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";
import { BuyMeACoffe } from "../../components/BuyMeACoffe";

export const Cards = () => {
  const navigation = useNavigation();
  const { data: cards, isLoading } = useCards();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        padding: theme.spacing.l,
        flexDirection: "column",
        justifyContent: "space-between",
        gap: theme.spacing.l,
      }}
    >
      <ScrollView>
        <View>
          {!!cards.length && (
            <View
              style={{
                gap: 8,
              }}
            >
              {cards.map((item) => (
                <CardItem card={item} key={item.id} />
              ))}
            </View>
          )}

          {!cards.length && (
            <View
              style={{
                alignItems: "center",
              }}
            >
              <MaterialCommunityIcons
                name="credit-card-off"
                size={48}
                color={theme.colors.primary}
              />
              <Text
                style={{
                  fontSize: theme.fontSizes.m,
                  textAlign: "center",
                  marginBottom: theme.spacing.s,
                }}
              >
                No card yet. Add the first one by clicking in the button below
              </Text>
              <Button
                onPress={() => navigation.navigate("NewCard")}
                mode="outlined"
              >
                ADD CARD
              </Button>
            </View>
          )}
        </View>
      </ScrollView>

      {!!cards.length && <BuyMeACoffe />}
    </View>
  );
};
