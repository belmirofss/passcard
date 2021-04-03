import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import Cards from '../pages/Cards';

export default function WithPinStackNavigation() {
    
    const StackNavigator = createStackNavigator();

    const screenOptionStyle: StackNavigationOptions  = {
        headerShown: false
    };

    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen name="Cards" component={Cards}/>
        </StackNavigator.Navigator>
    );
}