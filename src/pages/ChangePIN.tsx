import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AlertSnack from '../components/AlertSnack';
import ConfirmDialog from '../components/ConfirmDialog';
import InputPassword from '../components/InputPassword';
import PrimaryButton from '../components/PrimaryButton';
import PinContext from '../contexts/Pin';

export default function ChangePIN() {

    const pinContext = React.useContext(PinContext);
    const navigation = useNavigation();

    const [currentPin, setCurrentPin] = React.useState('');
    const [newPin, setNewPin] = React.useState('');
    const [alertVisible, setAlertVisible] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('');
    const [visibleConfirmChangePin, setVisibleConfirmChangePin] = React.useState(false);

    async function changePin() {
        setVisibleConfirmChangePin(false);

        if (currentPin == pinContext.pin) {
            if (!newPin || newPin?.length != 4 || !newPin?.match(/^[0-9]+$/)) {
                setAlertMessage("New PIN is invalid! Please, enter 4 numeric characters.");
                setAlertVisible(true);
                return;
            }

            pinContext.savePin(newPin);
            navigation.navigate('Cards', {
                message: 'PIN changed successfully!'
            });
        } else {
            setCurrentPin('');
            setNewPin('');
            setAlertMessage("The current PIN entered does not match the saved.");
            setAlertVisible(true);
        }
    }

    return (
        <React.Fragment>
            <AlertSnack
                message={alertMessage}
                visible={alertVisible} 
                onDismiss={() => setAlertVisible(false)} 
            />

            <ConfirmDialog 
                title="Are you sure you want to change the PIN?"
                paragraph="Make sure you remember the new PIN. Remember, you will not be able to recover it!"
                visible={visibleConfirmChangePin}
                onDismiss={() => setVisibleConfirmChangePin(false)}
                onYes={changePin}
                onNo={() => setVisibleConfirmChangePin(false)}
            />

            <View style={styles.container}>
                <View>
                    <InputPassword 
                        label="Current PIN"
                        password={currentPin} 
                        setPassword={setCurrentPin}
                        maxLength={4}
                        autoFocus
                    />

                    <InputPassword 
                        label="New PIN"
                        password={newPin} 
                        setPassword={setNewPin}
                        maxLength={4}
                    />
                </View>

                <PrimaryButton text="CHANGE PIN" onPress={() => setVisibleConfirmChangePin(true)} />
            </View>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});