import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import COLORS from '../constants/Colors';
import { Card } from '../models/Card';

interface CardViewProps {
    card: Card;
}

export default function CardView(props: CardViewProps) {

    const color = COLORS.find(color => color.color == props.card.color);

    return (
        <View style={{
            ... styles.container,
            backgroundColor: color?.color
        }}>
            <Text style={{
                ... styles.nameText,
                color: color?.contrast
            }}>
                {props.card.name}
            </Text>

            <Text style={{
                ... styles.passwordText,
                color: color?.contrast
            }}>
                {props.card.password}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get("window").width * 0.5,
        borderRadius: 16,
        padding: 16,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    nameText: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    passwordText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});