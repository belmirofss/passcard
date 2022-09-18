import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Appbar, Menu } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { theme } from "../theme";

type Props = {
  title: string;
  showBackButton?: boolean;
  showMenuButton?: boolean;
};

export default function Header({
  title,
  showBackButton,
  showMenuButton,
}: Props) {
  const navigation = useNavigation();

  const [visibleMenu, setVisibleMenu] = React.useState(false);

  const changePinButtonClick = (): void => {
    setVisibleMenu(false);
    navigation.navigate("ChangePin" as never);
  };

  const clearAllDataButtonClick = (): void => {
    setVisibleMenu(false);
    navigation.navigate("ClearAllData" as never);
  };

  const aboutButtonClick = (): void => {
    setVisibleMenu(false);
    navigation.navigate("About" as never);
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
                  size={24}
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
                size={24}
                color={Colors.PRIMARY}
              />
            )}
            titleStyle={{
              marginRight: 0,
            }}
            onPress={changePinButtonClick}
          />
          <Menu.Item
            title="Clean all data"
            icon={() => (
              <MaterialCommunityIcons
                name="delete-forever"
                size={24}
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
                size={24}
                color={Colors.PRIMARY}
              />
            )}
            onPress={aboutButtonClick}
          />
        </Menu>
      )}
    </Appbar.Header>
  );
}
