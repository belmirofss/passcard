import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo';

interface TitleAndDescriptionProps {
    title: string;
    description?: string;
    notShowLogo?: boolean;
}

export default function TitleAndDescription(props: TitleAndDescriptionProps) {
    return (
        <View>
            {
                !props.notShowLogo &&
                <Logo />
            }

            <Text style={styles.titleText}>
                {props.title}
            </Text>

            {
                props.description && 
                <Text style={styles.descriptionText}>
                    {props.description}
                </Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    descriptionText: {
        fontSize: 16
    }
});
