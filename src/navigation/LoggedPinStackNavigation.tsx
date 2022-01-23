import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cards from '../pages/Cards';
import CardForm from '../pages/CardForm';
import Header from '../components/Header';
import ChangePin from '../pages/ChangePin';
import ClearAllData from '../pages/ClearAllData';
import About from '../pages/About';

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
            <StackNavigator.Screen 
                name="ChangePin" 
                component={ChangePin}
                options={{
                    header: () => <Header title="Changing PIN" showBackButton />
                }}
            />
            <StackNavigator.Screen 
                name="ClearAllData" 
                component={ClearAllData}
                options={{
                    header: () => <Header title="Clear all data" showBackButton />
                }}
            />
            <StackNavigator.Screen 
                name="About" 
                component={About}
                options={{
                    header: () => <Header title="About" showBackButton />
                }}
            />
        </StackNavigator.Navigator>
    );
}