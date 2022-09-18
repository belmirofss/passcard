import React from "react";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";

type Props = {
  title: string;
  paragraph: string;
  visible: boolean;
  onDismiss: () => void;
  onNo: () => void;
  onYes: () => void;
};

export default function ConfirmDialog({
  title,
  paragraph,
  visible,
  onDismiss,
  onNo,
  onYes,
}: Props) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{paragraph}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onNo}>NO</Button>
          <Button onPress={onYes}>YES, I CONFIRM</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}
