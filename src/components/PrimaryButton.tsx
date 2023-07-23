import { Button, Text } from "react-native-paper";
import { theme } from "../theme";

type Props = {
  text: string;
  onPress: () => void;
};

export const PrimaryButton = ({ text, onPress }: Props) => {
  return (
    <Button
      style={{ width: "100%", marginTop: theme.spacing.m }}
      contentStyle={{
        paddingVertical: theme.spacing.m,
      }}
      theme={{
        roundness: theme.roundless,
      }}
      mode="contained"
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: theme.fontSizes.m,
          fontWeight: "bold",
          color: theme.colors.secondary,
        }}
      >
        {text}
      </Text>
    </Button>
  );
};
