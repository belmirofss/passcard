import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Colors } from '../enums/Colors';

interface PrimaryButtonProps {
    text: string;
    onPress(): void;
}

export default function PrimaryButton(props: PrimaryButtonProps) {

    return (
        <Button
            style={styles.button}
            contentStyle={{
                paddingVertical: 12
            }}
            theme={{
                roundness: 100
            }}
            mode="contained" 
            onPress={() => props.onPress()}>
            <Text style={styles.buttonText}>{props.text}</Text>
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        marginTop: 24
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.SECONDARY
    }
});