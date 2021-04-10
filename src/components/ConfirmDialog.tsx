import React from 'react';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';

interface ConfirmDialogProps {
    title: string;
    paragraph: string;
    visible: boolean;
    onDismiss(): void;
    onNo(): void;
    onYes(): void;
}

export default function ConfirmDialog(props: ConfirmDialogProps) {

    return (
        <Portal>
            <Dialog visible={props.visible} onDismiss={props.onDismiss}>
            <Dialog.Title>{props.title}</Dialog.Title>
            <Dialog.Content>
                <Paragraph>{props.paragraph}</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
                <Button onPress={props.onNo}>NO</Button>
                <Button onPress={props.onYes}>YES, I WANT</Button>
            </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}