import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import PASSCARD_ICON from '../images/PASSCARD_ICON.png';

export default function Welcome() {

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={PASSCARD_ICON} />

            <Text style={styles.welcomeText}>Welcome</Text>
            <Text style={styles.passcardDescriptionText}>PASSCARD saves your card passwords offline and securely</Text>

            <Button
                style={styles.startButton}
                contentStyle={{
                    paddingVertical: 12
                }}
                mode="contained" 
                onPress={() => console.log('Pressed')}>
                <Text style={styles.startButtonText}>START</Text>
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
    welcomeText: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    passcardDescriptionText: {
        fontSize: 24
    },
    startButton: {
        width: '100%',
        marginTop: 42
    },
    startButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#d9d9d9'
    }
});
