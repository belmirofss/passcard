import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleAndDescription from '../components/TitleAndDescription';
import appInfo from '../../app.json';

export default function About() {

    return (
        <View style={styles.container}>
            
            <TitleAndDescription
                title="The app saves your card passwords offline and securely."
                description="All your cards passwords are saved only and exclusively on your device. The app will never save or collect any information entered."
            />

            <Text style={styles.versionText}>
                Version: {appInfo.expo.version}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16
    },
    versionText: {
        fontSize: 12,
        marginTop: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    }
});