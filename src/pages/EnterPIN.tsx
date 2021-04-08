import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Dialog, Portal } from 'react-native-paper';
import InputPin from '../components/InputPin';
import TitleAndDescription from '../components/TitleAndDescription';
import PinContext from '../contexts/Pin';

export default function EnterPin() {

    const pinContext = React.useContext(PinContext);

    const [pin, setPin] = React.useState('');
    const [alertVisible, setAlertVisible] = React.useState(false);

    function enter() {
        if (!pinContext.login(pin)) {
            setAlertVisible(true);
        }
    }

    return (
        <View style={styles.container}>
        
            <Portal>
                <Dialog visible={alertVisible} onDismiss={() => setAlertVisible(false)}>
                    <Dialog.Title>Error: Wrong PIN!</Dialog.Title>
                    <Dialog.Actions>
                        <Button onPress={() => setAlertVisible(false)}>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            <TitleAndDescription 
                title="Enter with your PIN"
                description="To view your cards, enter your PIN." 
            />     

            <InputPin pin={pin} setPin={setPin} />

            <Button
                style={styles.enterButton}
                contentStyle={{
                    paddingVertical: 12
                }}
                theme={{
                    roundness: 100
                }}
                mode="contained" 
                onPress={() => enter()}>
                <Text style={styles.enterButtonText}>ENTER</Text>
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
    enterButton: {
        width: '100%',
        marginTop: 24
    },
    enterButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d9d9d9'
    }
});