import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';

import PinContext from '../contexts/Pin';
import TitleAndDescription from '../components/TitleAndDescription';
import InputPassword from '../components/InputPassword';

export default function CreatePin() {

    const pinContext = React.useContext(PinContext);

    const [pin, setPin] = React.useState('');
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
                    <Dialog.Title>Error: {alertMessage}</Dialog.Title>
                    <Dialog.Actions>
                        <Button onPress={() => setAlertVisible(false)}>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            <TitleAndDescription 
                title="Create your PIN"
                description="For your security, enter a PIN. Remember not to miss it. It will be used for your access." 
            />     

            <InputPassword
                label="PIN"
                password={pin} 
                setPassword={setPin}
                maxLength={4} />

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
