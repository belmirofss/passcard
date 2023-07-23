import { createContext, ReactNode, useState } from "react";
import {
  Snackbar,
  Button,
  Dialog,
  Paragraph,
  Portal,
} from "react-native-paper";

type NotificationContextData = {
  showSnack: (message: string) => void;
  showDialog: (
    title: string,
    description: string,
    onConfirm: () => void
  ) => void;
};

export const NotificationContext = createContext<NotificationContextData>(
  {} as NotificationContextData
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [snack, setSnack] = useState({
    visible: false,
    message: "",
  });

  const [dialog, setDialog] = useState({
    visible: false,
    title: "",
    description: "",
    onConfirm: () => {},
  });

  const showSnack = (message: string) => {
    setSnack({
      visible: true,
      message,
    });
  };

  const showDialog = (
    title: string,
    description: string,
    onConfirm: () => void
  ) => {
    setDialog({
      visible: true,
      title,
      description,
      onConfirm,
    });
  };

  return (
    <NotificationContext.Provider
      value={{
        showSnack,
        showDialog,
      }}
    >
      <>
        <Snackbar
          visible={snack.visible}
          onDismiss={() => setSnack({ visible: false, message: "" })}
          action={{
            label: "OK",
            onPress: () => setSnack({ visible: false, message: "" }),
          }}
          duration={2500}
          wrapperStyle={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            zIndex: 9999999,
          }}
        >
          {snack.message}
        </Snackbar>
        <Portal>
          <Dialog
            visible={dialog.visible}
            onDismiss={() =>
              setDialog({
                title: "",
                description: "",
                visible: false,
                onConfirm: () => {},
              })
            }
          >
            <Dialog.Title>{dialog.title}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{dialog.description}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() =>
                  setDialog({
                    title: "",
                    description: "",
                    visible: false,
                    onConfirm: () => {},
                  })
                }
              >
                NO
              </Button>
              <Button
                onPress={() => {
                  dialog.onConfirm();
                  setDialog({
                    title: "",
                    description: "",
                    visible: false,
                    onConfirm: () => {},
                  });
                }}
              >
                YES, I CONFIRM
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        {children}
      </>
    </NotificationContext.Provider>
  );
};
