import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ToggleButton } from 'react-native-paper';
import COLORS from '../constants/Colors';
import { Colors } from '../enums/Colors';
import { Color } from '../models/Color';

interface ColorPickerProps {
    label: string;
    color: string;
    setColor(color: string): void;
}

export default function ColorPicker(props: ColorPickerProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.labelText}>{props.label}</Text>

            <View style={styles.wrapperColors}>
                {
                    COLORS.map((color: Color, index: number) => (
                        <ToggleButton
                            key={index}
                            icon={props.color == color.color ? 'check' : ''}
                            style={{
                                backgroundColor: color.color,
                                width: '25%',
                                borderColor: props.color == color.color ? Colors.PRIMARY : 'transparent',
                                borderWidth: 2,
                            }}
                            color={color.contrast}
                            status={props.color == color.color ? 'checked' : 'unchecked'}
                            onPress={() => props.setColor(color.color)}
                        />
                    ))
                }
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        borderColor: '#707070',
        borderWidth: 1
    },
    wrapperColors: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    labelText: {
        fontSize: 16,
        color: '#707070',
        marginBottom: 6
    }
});