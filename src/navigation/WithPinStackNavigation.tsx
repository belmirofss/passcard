import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

export default function WithPinStackNavigatio() {
    
    const StackNavigator = createStackNavigator();

    const screenOptionStyle: StackNavigationOptions  = {
        headerShown: false
    };

    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
        </StackNavigator.Navigator>
    );
}