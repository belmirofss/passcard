import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputPassword from '../components/InputPassword';
import PrimaryButton from '../components/PrimaryButton';
import PinContext from '../contexts/Pin';

export default function ChangePIN() {

    const pinContext = React.useContext(PinContext);

    const [currentPin, setCurrentPin] = React.useState('');
    const [newPin, setNewPin] = React.useState('');

    async function changePin() {
        if (currentPin == pinContext.pin) {

        } else {
            
        }
    }

    return (
        <React.Fragment>
            <View style={styles.container}>
                <View>
                    <InputPassword 
                        label="Current PIN"
                        password={currentPin} 
                        setPassword={setCurrentPin}
                        maxLength={4}
                        autoFocus />

                    <InputPassword 
                        label="New PIN"
                        password={newPin} 
                        setPassword={setNewPin}
                        maxLength={4}
                        autoFocus />
                </View>

                <PrimaryButton text="CHANGE PIN" onPress={() => changePin()} />
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