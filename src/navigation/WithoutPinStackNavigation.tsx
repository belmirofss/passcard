import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import CreatePIN from '../pages/CreatePIN';

export default function WithoutPinStackNavigation() {
    
    const StackNavigator = createStackNavigator();

    const screenOptionStyle: StackNavigationOptions  = {
        headerShown: false
    };

    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen name="Welcome" component={Welcome}/>
            <StackNavigator.Screen name="CreatePIN" component={CreatePIN}/>
        </StackNavigator.Navigator>
    );
}