import React from "react";
import { Snackbar } from "react-native-paper";

type Props = {
  message: string;
  visible: boolean;
  onDismiss(): void;
};

export default function AlertSnack({ message, visible, onDismiss }: Props) {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      action={{
        label: "OK",
        onPress: onDismiss,
      }}
      wrapperStyle={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "100%",
      }}
      duration={2500}
    >
      {message}
    </Snackbar>
  );
}
