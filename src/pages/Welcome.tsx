import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

import TitleAndDescription from '../components/TitleAndDescription';

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TitleAndDescription
                title="Welcome"
                description="PASSCARD saves your card passwords offline and securely." 
            />

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
