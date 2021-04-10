import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Cards from '../pages/Cards';
import CardForm from '../pages/CardForm';
import Header from '../components/Header';

export default function LoggedPinStackNavigation() {
    
    const StackNavigator = createStackNavigator();

    return (
        <StackNavigator.Navigator>
            <StackNavigator.Screen 
                name="Cards" 
                component={Cards}
                options={{
                    header: () => <Header title="My cards" showMenuButton />
                }}
            />
            <StackNavigator.Screen 
                name="NewCard" 
                component={CardForm}
                options={{
                    header: () => <Header title="New card" showBackButton />
                }}
            /> 
            <StackNavigator.Screen 
                name="EditCard" 
                component={CardForm}
                options={{
                    header: () => <Header title="Editing card" showBackButton />
                }}
            /> 
        </StackNavigator.Navigator>
    );
}