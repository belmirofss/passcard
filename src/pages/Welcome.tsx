import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import PASSCARD_ICON from '../images/PASSCARD_ICON.png';

export default function Welcome() {
    return (
        <View style={styles.container}>
            <Image style={styles.logoImage} source={PASSCARD_ICON} />

            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={styles.passcardDescriptionText}>PASSCARD saves your card passwords offline and securely</Text>

            <Button
                style={styles.startButton}
                contentStyle={{
                    paddingVertical: 12
                }}
                mode="contained" 
                onPress={() => console.log('Pressed')}>
                <MaterialCommunityIcons name="rocket-launch" size={18} color="#d9d9d9" />
                <Text style={styles.startButtonText}>START</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16
    },
    logoImage: {
        width: 125, 
        height: 125
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold'
    },
    passcardDescriptionText: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 4
    },
    startButton: {
        width: '100%',
        marginTop: 32
    },
    startButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#d9d9d9'
    }
});
