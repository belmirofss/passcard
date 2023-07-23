import { View } from "react-native";
import { Logo } from "./Logo";
import { theme } from "../theme";
import { Text } from "react-native-paper";

type Props = {
  title: string;
  description?: string;
  notShowLogo?: boolean;
};

export const TitleAndDescription = ({
  title,
  description,
  notShowLogo,
}: Props) => {
  return (
    <View>
      {!notShowLogo && (
        <View style={{ marginBottom: theme.spacing.m }}>
          <Logo />
        </View>
      )}
      <Text
        style={{
          fontSize: theme.fontSizes.l,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      {description && (
        <Text
          style={{
            fontSize: theme.fontSizes.m,
          }}
        >
          {description}
        </Text>
      )}
    </View>
  );
};
