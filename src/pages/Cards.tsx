import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function Cards() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>

            </View>

            <Button
                style={styles.newCardButton}
                contentStyle={{
                    paddingVertical: 12
                }}
                theme={{
                    roundness: 100
                }}
                mode="contained" 
                onPress={() => navigation.navigate('NewCard')}>
                <Text style={styles.newCardButtonText}>NEW CARD</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    newCardButton: {
        width: '100%',
        marginTop: 24
    },
    newCardButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d9d9d9'
    }
});