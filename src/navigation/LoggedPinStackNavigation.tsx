import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import Cards from '../pages/Cards';
import CardForm from '../pages/CardForm';
import Header from '../components/Header';

export default function LoggedPinStackNavigation() {
    
    const StackNavigator = createStackNavigator();

    const screenOptionStyle: StackNavigationOptions  = {
        headerTitleAlign: 'left',
        headerStyle: {
            backgroundColor: 'white',
            borderBottomWidth: 0
        },
        headerTitleStyle: {
            color: '#2b2b2b',
            fontSize: 24
        },
        headerLeft: () => { return null },
        cardStyle: {
            backgroundColor: 'white'
        }
    };

    return (
        <StackNavigator.Navigator screenOptions={screenOptionStyle}>
            <StackNavigator.Screen 
                name="Cards" 
                component={Cards}
                options={{
                    title: 'My cards',
                    headerRight: () => <Header />
                }}/>
            <StackNavigator.Screen 
                name="NewCard" 
                component={CardForm}
                options={{
                    title: 'New card',
                    headerRight: () => <Header showBackButton />
                }} /> 
            <StackNavigator.Screen 
                name="EditCard" 
                component={CardForm}
                options={{
                    title: 'Editing card',
                    headerRight: () => <Header showBackButton />
                }} /> 
        </StackNavigator.Navigator>
    );
}