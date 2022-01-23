import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import TitleAndDescription from '../components/TitleAndDescription';
import PrimaryButton from '../components/PrimaryButton';

export default function Welcome() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TitleAndDescription
                title="Welcome"
                description="PASSCARD saves your cards passwords offline and securely." 
            />

            <PrimaryButton text="START" onPress={() => navigation.navigate('CreatePin' as never)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      justifyContent: 'flex-end'
    }
});
