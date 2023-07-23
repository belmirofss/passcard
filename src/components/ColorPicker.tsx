import { View } from "react-native";
import { Text, ToggleButton } from "react-native-paper";
import { COLORS } from "../constants";
import { theme } from "../theme";

type Props = {
  label: string;
  color: string;
  setColor: (color: string) => void;
};

export const ColorPicker = ({ label, color, setColor }: Props) => {
  return (
    <View
      style={{
        padding: theme.spacing.m,
        backgroundColor: theme.colors.secondary,
        borderRadius: 8,
        borderColor: theme.colors.gray,
        borderWidth: 1,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: theme.colors.gray,
          marginBottom: theme.spacing.s,
        }}
      >
        {label}
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {COLORS.map((item) => (
          <View
            style={{
              width: "25%",
              padding: theme.spacing.xs,
            }}
            key={item.color}
          >
            <ToggleButton
              icon={color == item.color ? "check" : ""}
              style={{
                width: "100%",
                backgroundColor: item.color,
                borderColor:
                  color == item.color ? theme.colors.primary : "transparent",
                borderWidth: 2,
              }}
              color={item.contrast}
              status={color == item.color ? "checked" : "unchecked"}
              onPress={() => setColor(item.color)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
