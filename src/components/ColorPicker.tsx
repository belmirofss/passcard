import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ToggleButton } from 'react-native-paper';
import COLORS from '../constants/colors';
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
                                width: 60,
                                marginRight: 2,
                                marginBottom: 2,
                                borderColor: props.color == color.color ? '#2b2b2b' : 'transparent',
                                borderWidth: 2,
                            }}
                            color={color.contrast}
                            value="bluetooth"
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
        marginTop: 8
    },
    wrapperColors: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    labelText: {
        fontSize: 14,
        color: '#2b2b2b'
    }
});