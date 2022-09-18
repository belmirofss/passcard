import {
  RouteProp,
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CardView from "../components/CardView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ConfirmDialog from "../components/ConfirmDialog";
import PrimaryButton from "../components/PrimaryButton";
import IconButton from "../components/IconButton";
import AlertSnack from "../components/AlertSnack";
import { Card } from "../types";
import { theme } from "../theme";
import { deleteCard, listCards } from "../api/cards";

type ParamList = {
  Message: {
    message: string;
  };
};

export default function Cards() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const route = useRoute<RouteProp<ParamList, "Message">>();

  const [cards, setCards] = useState<Card[]>([]);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [visibleConfirmDelete, setVisibleConfirmDelete] = useState(false);
  const [deletedCard, setDeletedCard] = useState<Card | null>();
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);

  async function callList(): Promise<void> {
    const cards = await listCards();
    setCards(cards);
  }

  function questionDeleteTheCard(card: Card) {
    setDeletedCard(card);
    setVisibleConfirmDelete(true);
  }

  const callDelete = async () => {
    if (deletedCard?.id) {
      await deleteCard(deletedCard.id);
      const cardIndex = cards.findIndex((card) => card.id == deletedCard.id);
      cards.splice(cardIndex, 1);
      setCards(cards);
    }

    closeDialogAndReset();
  };

  const closeDialogAndReset = () => {
    setDeletedCard(null);
    setVisibleConfirmDelete(false);
  };

  const renderItem = ({ item }: { item: Card }) => {
    return <CardView card={item} showPassword={showPassword} />;
  };

  useEffect(() => {
    setAlertVisible(route.params?.message ? true : false);
    setAlertMessage(route.params?.message || "");
    navigation.setParams({
      message: null,
    } as never);
    callList();
  }, [isFocused]);

  return (
    <>
      <ConfirmDialog
        title="Do you really want to delete the card?"
        paragraph={`When you delete the card "${deletedCard?.name}", this action cannot be undone.`}
        visible={visibleConfirmDelete}
        onDismiss={() => setVisibleConfirmDelete(false)}
        onYes={callDelete}
        onNo={closeDialogAndReset}
      />

      <AlertSnack
        message={alertMessage}
        visible={alertVisible}
        onDismiss={() => setAlertVisible(false)}
      />

      <View style={styles.container}>
        <View>
          {cards.length > 0 && (
            <View>
              <Pagination
                dotsLength={cards.length}
                activeDotIndex={activeSlideIndex}
                dotStyle={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: theme.colors.primary,
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />

              <Carousel
                data={cards}
                renderItem={renderItem}
                layout="stack"
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={{
                  marginLeft: ITEM_WIDTH * -0.05,
                }}
                onSnapToItem={(index) => setActiveSlideIndex(index)}
              />

              <View style={styles.wrapperActions}>
                <IconButton
                  icon={showPassword ? "eye" : "eye-off"}
                  onPress={() => setShowPassword(showPassword ? false : true)}
                />

                <IconButton
                  icon="circle-edit-outline"
                  onPress={() =>
                    navigation.navigate(
                      "EditCard" as never,
                      { card: cards[activeSlideIndex] } as never
                    )
                  }
                />

                <IconButton
                  icon="delete-circle-outline"
                  onPress={() => questionDeleteTheCard(cards[activeSlideIndex])}
                />
              </View>
            </View>
          )}

          {cards.length == 0 && (
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
              <Text style={styles.noCardRegisteredText}>
                No card registered. Register the first one by clicking the
                button below.
              </Text>
            </View>
          )}
        </View>

        <PrimaryButton
          text="NEW CARD"
          onPress={() => navigation.navigate("NewCard" as never)}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 36,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  wrapperActions: {
    flexDirection: "row",
    justifyContent: "center",
  },
  noCardRegisteredText: {
    fontSize: 18,
    textAlign: "center",
  },
});
