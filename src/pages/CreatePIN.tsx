import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';

import PASSCARD_ICON from '../images/PASSCARD_ICON.png';

export default function CreatePIN() {

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={PASSCARD_ICON} />

            <Text style={styles.createPINText}>
                Create your PIN
            </Text>
            <Text style={styles.passcardDescriptionText}>
                For your security, enter a PIN. Remember not to miss it. It will be used for your access.
            </Text>

            <Button
                style={styles.finishButton}
                contentStyle={{
                    paddingVertical: 12
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
        fontSize: 32,
        fontWeight: 'bold'
    },
    passcardDescriptionText: {
        fontSize: 24
    },
    finishButton: {
        width: '100%',
        marginTop: 42
    },
    finishButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d9d9d9'
    }
});
