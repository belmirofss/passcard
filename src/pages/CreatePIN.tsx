import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Dialog, Paragraph, Portal, TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import PinContext from '../contexts/Pin';
import Logo from '../components/Logo';

export default function CreatePIN() {

    const pinContext = React.useContext(PinContext);

    const [pin, setPin] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');

    function finish() {
        if (!pin || pin?.length != 4 || !pin?.match(/^[0-9]+$/)) {
            setAlertMessage("PIN is invalid! Please, enter 4 numeric characters.");
            setAlertVisible(true);
            return;
        }

        pinContext.savePin(pin);
    }

    return (
        <View style={styles.container}>
        
        <Portal>
            <Dialog visible={alertVisible} onDismiss={() => setAlertVisible(false)}>
                <Dialog.Title>Error</Dialog.Title>
                <Dialog.Content>
                    <Paragraph>{alertMessage}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={() => setAlertVisible(false)}>OK</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>

            <Logo />
            
            <Text style={styles.createPINText}>
                Create your PIN
            </Text>
            <Text style={styles.passcardDescriptionText}>
                For your security, enter a PIN. Remember not to miss it. It will be used for your access.
            </Text>

            <View style={styles.wrapperPinInput}>
                <TextInput
                    style={styles.pinInput}
                    mode="outlined"
                    label="PIN"
                    value={pin}
                    onChangeText={text => setPin(text)}
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
            

            <Button
                style={styles.finishButton}
                contentStyle={{
                    paddingVertical: 12
                }}
                theme={{
                    roundness: 100
                }}
                mode="contained" 
                onPress={() => finish()}>
                <Text style={styles.finishButtonText}>FINISH</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'flex-end'
    },
    createPINText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    passcardDescriptionText: {
        fontSize: 16
    },
    wrapperPinInput: {
        marginTop: 6,
        flexDirection: "row",
        alignItems: 'center'
    },
    pinInput: {
        flex: 1,
        marginRight: 4
    },
    finishButton: {
        width: '100%',
        marginTop: 24
    },
    finishButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d9d9d9'
    }
});
