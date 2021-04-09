import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import COLORS from '../constants/Colors';
import { Card } from '../models/Card';
interface CardViewProps {
    card: Card;
    showPassword: boolean;
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

            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <MaterialCommunityIcons 
                    name="lock"
                    color={color?.contrast} 
                    size={18} 
                    style={{
                        marginRight: 4
                    }} />

                    {
                        props.showPassword &&
                        <Text style={{
                            ... styles.passwordText,
                            color: color?.contrast
                        }}>
                            {props.card.password}
                        </Text>
                    }
                    
                    {
                        !props.showPassword &&
                        <View style={{
                            height: 24,
                            justifyContent: 'center'
                        }}>
                            <View style={[styles.blurredView, {backgroundColor: color?.contrast}]}></View>
                        </View>
                    }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get("window").width * 0.5,
        borderRadius: 16,
        borderWidth: 3,
        borderColor: '#2b2b2b',
        padding: 16,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    passwordText: {
        fontSize: 16,
        fontWeight: 'bold',
        flexWrap: 'wrap'
    },
    blurredView: {
        width: 125,
        height: 16
    }
});