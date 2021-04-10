import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import AlertSnack from '../components/AlertSnack';
import InputPassword from '../components/InputPassword';
import TitleAndDescription from '../components/TitleAndDescription';
import PinContext from '../contexts/Pin';
import { Colors } from '../enums/Colors';

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
        </React.Fragment>
        
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
        color: Colors.SECONDARY
    }
});