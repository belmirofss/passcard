import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import CreatePIN from '../pages/CreatePIN';

export default function WithoutPinStackNavigatio() {
    
    const StackNavigator = createStackNavigator();

    const screenOptionStyle: StackNavigationOptions  = {
        header: () => null
    };

    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen name="Welcome" component={Welcome}/>
            <StackNavigator.Screen name="CreatePIN" component={CreatePIN}/>
        </StackNavigator.Navigator>
    );
}