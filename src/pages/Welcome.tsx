import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

import PASSCARD_ICON from '../images/PASSCARD_ICON.png';

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={PASSCARD_ICON} />

            <Text style={styles.welcomeText}>
                Welcome
            </Text>
            <Text style={styles.passcardDescriptionText}>
                PASSCARD saves your card passwords offline and securely.
            </Text>

            <Button
                style={styles.startButton}
                contentStyle={{
                    paddingVertical: 12
                }}
                theme={{
                    roundness: 100
                }}
                mode="contained" 
                onPress={() => navigation.navigate('CreatePIN')}>
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
        fontSize: 24,
        fontWeight: 'bold'
    },
    passcardDescriptionText: {
        fontSize: 16
    },
    startButton: {
        width: '100%',
        marginTop: 24
    },
    startButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d9d9d9'
    }
});
