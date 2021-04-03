import React, { createContext, ReactNode, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Keys } from '../enums/Keys';

interface PinContextData {
    pin: string;
    hasPin: boolean;
    savePin: Function;
    clearPin: Function;
}

const PinContext = createContext<PinContextData>({} as PinContextData);

export function PinProvider(props: {
    children: ReactNode
}) {

    const [pin, setPin] = useState('');
    const [hasPin, setHasPin] = useState(false);

    const savePin = async (pin: string) => {
        if (pin) {
            await SecureStore.setItemAsync(Keys.PIN, pin);
            setPin(pin);
            setHasPin(true);
        }
    }

    const clearPin = async () => {
        await SecureStore.deleteItemAsync(Keys.PIN);
        setPin('');
        setHasPin(false);
    }

    React.useEffect(() => {
        clearPin()
    }, []);

    return (
        <PinContext.Provider value={{
            pin,
            hasPin,
            savePin,
            clearPin
        }}>
            {props.children}
        </PinContext.Provider>
    );
}

export default PinContext;