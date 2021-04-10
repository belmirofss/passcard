import React from 'react';
import { StyleSheet, View } from 'react-native';
import AlertSnack from '../components/AlertSnack';
import InputPassword from '../components/InputPassword';
import PrimaryButton from '../components/PrimaryButton';
import TitleAndDescription from '../components/TitleAndDescription';
import PinContext from '../contexts/Pin';

export default function EnterPin() {

    const pinContext = React.useContext(PinContext);

    const [pin, setPin] = React.useState('');
    const [alertVisible, setAlertVisible] = React.useState(false);

    function enter() {
        if (!pinContext.login(pin)) {
            setPin('');
            setAlertVisible(true);
        }
    }

    return (
        <React.Fragment>
            <AlertSnack
                message="Wrong PIN!"
                visible={alertVisible} 
                onDismiss={() => setAlertVisible(false)} />
                
            <View style={styles.container}>
                <TitleAndDescription 
                    title="Enter with your PIN"
                    description="To view your cards, enter your PIN." 
                />     

                <InputPassword 
                    label="PIN"
                    password={pin} 
                    setPassword={setPin}
                    maxLength={4}
                    autoFocus />

                <PrimaryButton text="ENTER" onPress={() => enter()} />
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