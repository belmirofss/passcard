import { useNavigation } from "@react-navigation/native";
import { Appbar, Menu } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../theme";
import { useState } from "react";

type Props = {
  title: string;
  showNewCardButton?: boolean;
  showBackButton?: boolean;
  showMenuButton?: boolean;
};

const ICON_SIZE = 24;

export const Header = ({
  title,
  showNewCardButton,
  showBackButton,
  showMenuButton,
}: Props) => {
  const navigation = useNavigation();

  const [visibleMenu, setVisibleMenu] = useState(false);

  const changePinButtonClick = (): void => {
    setVisibleMenu(false);
    navigation.navigate("ChangePin");
  };

  const clearAllDataButtonClick = (): void => {
    setVisibleMenu(false);
    navigation.navigate("ClearAllData");
  };

  const aboutButtonClick = (): void => {
    setVisibleMenu(false);
    navigation.navigate("About");
  };

  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: theme.colors.secondary,
        },
      }}
      statusBarHeight={0}
    >
      <Appbar.Content title={title} />

      {showNewCardButton && (
        <Appbar.Action
          icon={() => (
            <MaterialCommunityIcons
              name="credit-card-plus"
              size={ICON_SIZE}
              color={Colors.PRIMARY}
            />
          )}
          onPress={() => navigation.navigate("NewCard")}
        />
      )}
      {showBackButton && <Appbar.BackAction onPress={navigation.goBack} />}
      {showMenuButton && (
        <Menu
          visible={visibleMenu}
          onDismiss={() => setVisibleMenu(false)}
          anchor={
            <Appbar.Action
              icon={() => (
                <MaterialIcons
                  name="settings"
                  size={ICON_SIZE}
                  color={Colors.PRIMARY}
                />
              )}
              color={Colors.PRIMARY}
              onPress={() => setVisibleMenu(true)}
            />
          }
        >
          <Menu.Item
            title="Change PIN"
            icon={() => (
              <MaterialCommunityIcons
                name="key-change"
                size={ICON_SIZE}
                color={Colors.PRIMARY}
              />
            )}
            onPress={changePinButtonClick}
          />
          <Menu.Item
            title="Clean all data"
            icon={() => (
              <MaterialCommunityIcons
                name="delete-forever"
                size={ICON_SIZE}
                color={Colors.PRIMARY}
              />
            )}
            onPress={clearAllDataButtonClick}
          />
          <Menu.Item
            title="About"
            icon={() => (
              <MaterialCommunityIcons
                name="information"
                size={ICON_SIZE}
                color={Colors.PRIMARY}
              />
            )}
            onPress={aboutButtonClick}
          />
        </Menu>
      )}
    </Appbar.Header>
  );
};
