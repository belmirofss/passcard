import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Colors } from '../enums/Colors';

interface IconButtonProps {
    icon: any;
    onPress(): void;
}

export default function IconButton(props: IconButtonProps) {

    return (
        <Button
            style={styles.button}
            contentStyle={{
                paddingVertical: 2
            }}
            theme={{
                roundness: 100
            }}
            mode="contained" 
            onPress={() => props.onPress()}>
            <MaterialCommunityIcons 
                name={props.icon} 
                size={16} 
            />
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 8,
        width: 20,
        marginRight: 4
    },
    buttonText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: Colors.SECONDARY
    }
});