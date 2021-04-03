import React from 'react';
import { Image, StyleSheet } from 'react-native';

import PASSCARD_ICON from '../images/PASSCARD_ICON.png';

export default function Logo() {
    return <Image style={styles.logoImage} source={PASSCARD_ICON} />
}  

const styles = StyleSheet.create({
    logoImage: {
        width: 125,
        height: 125 * 0.65333333333,
        marginBottom: 4
    }
});