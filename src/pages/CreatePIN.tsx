import React from 'react';
import { StyleSheet, View } from 'react-native';

import PinContext from '../contexts/Pin';
import TitleAndDescription from '../components/TitleAndDescription';
import InputPassword from '../components/InputPassword';
import AlertSnack from '../components/AlertSnack';
import PrimaryButton from '../components/PrimaryButton';

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
        <React.Fragment>
            <AlertSnack
                message={alertMessage}
                visible={alertVisible} 
                onDismiss={() => setAlertVisible(false)} 
            />

            <View style={styles.container}>
                <TitleAndDescription 
                    title="Create your PIN"
                    description="For your security, enter a PIN. Remember not to miss it. It will be used for your access." 
                />     

                <InputPassword
                    label="PIN"
                    password={pin} 
                    setPassword={setPin}
                    maxLength={4}
                    autoFocus 
                />

                <PrimaryButton text="FINISH" onPress={() => finish()} />
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'flex-end'
    }
});
