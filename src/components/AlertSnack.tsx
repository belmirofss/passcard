import React from 'react';
import { Snackbar } from 'react-native-paper';

interface AlertSnackProps {
    message: string;
    visible: boolean;
    onDismiss(): void;
}

export default function AlertSnack(props: AlertSnackProps) {

    return (
        <Snackbar
            visible={props.visible}
            onDismiss={() => props.onDismiss()}
            action={{
                label: 'OK',
                onPress: () => props.onDismiss()
            }}
            wrapperStyle={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
            }}

            duration={2500}>
            {props.message}
        </Snackbar>
    );
}