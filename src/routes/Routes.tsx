  
import React from 'react';
import PinContext from '../contexts/Pin';
import WithoutPinStackNavigation from '../navigation/WithoutPinStackNavigation';
import WithPinStackNavigation from '../navigation/WithPinStackNavigation';

export default function Routes() {

    const { hasPin, logged } = React.useContext(PinContext);

    if (hasPin && logged) {
        return <WithPinStackNavigation />
    }

    if (hasPin && !logged) {
        
    }

    return <WithoutPinStackNavigation />;
}