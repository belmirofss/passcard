import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

import Logo from '../components/Logo';

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Logo />

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
