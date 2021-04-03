import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import PASSCARD_ICON from '../images/PASSCARD_ICON.png';

export default function CreatePIN() {
    const [pin, setPin] = React.useState('');
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={PASSCARD_ICON} />

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
                onPress={() => console.log('Pressed')}>
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
    logoImage: {
        width: 125,
        height: 125 * 0.65333333333,
        marginBottom: 4
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
