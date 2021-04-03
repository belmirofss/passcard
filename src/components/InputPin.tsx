import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

interface InputPinProps {
    pin: string;
    setPin(pin: string): void;
}

export default function InputPin(props: InputPinProps) {

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    return (
        <View style={styles.wrapperPinInput}>
            <TextInput
                style={styles.pinInput}
                mode="outlined"
                label="PIN"
                value={props.pin}
                onChangeText={text => props.setPin(text)}
                keyboardType="numeric"
                maxLength={4}
                secureTextEntry={secureTextEntry}
            />

            <Button
                mode="contained"
                color="#d9d9d9" 
                onPress={() => setSecureTextEntry(!secureTextEntry)}>
                <MaterialCommunityIcons name={secureTextEntry ? 'eye' : 'eye-off'} size={24} color="black" />
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapperPinInput: {
        marginTop: 6,
        flexDirection: "row",
        alignItems: 'center'
    },
    pinInput: {
        flex: 1,
        marginRight: 4
    }
});