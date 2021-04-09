import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

interface HeaderProps {
    showBackButton?: boolean;
}

export default function Header(props: HeaderProps) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {props.showBackButton && (
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={28} />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingRight: 14
    },
    button: {
        width: 36,
        justifyContent: 'center'
    }
});