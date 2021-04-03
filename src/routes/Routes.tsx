  
import React from 'react';
import PinContext from '../contexts/Pin';
import WithoutPinStackNavigation from '../navigation/WithoutPinStackNavigation';
import WithPinStackNavigation from '../navigation/WithPinStackNavigation';

export default function Routes() {

    const { hasPin } = React.useContext(PinContext);

    if (hasPin) {
        return <WithPinStackNavigation />
    }

    return <WithoutPinStackNavigation />;
}