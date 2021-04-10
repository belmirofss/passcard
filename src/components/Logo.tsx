import React from 'react';
import { Image, StyleSheet } from 'react-native';

import PASSCARD_ICON from '../images/PASSCARD_ICON.png';

const IMAGE_WIDTH = 125;

export default function Logo() {
    return <Image style={styles.logoImage} source={PASSCARD_ICON} />
}  

const styles = StyleSheet.create({
    logoImage: {
        width: IMAGE_WIDTH,
        height: IMAGE_WIDTH * 0.65333333333,
        marginBottom: 4
    }
});