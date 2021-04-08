import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NewCard() {

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});