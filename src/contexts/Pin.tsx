import React, { createContext, ReactNode, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { Keys } from '../enums/Keys';

interface PinContextData {
    pin: string;
    hasPin: boolean;
    logged: boolean;
    savePin(pin: string): Promise<void>;
    clearPin(): Promise<void>;
    login(typedPin: string): boolean;
    logout(): void;
}

const PinContext = createContext<PinContextData>({} as PinContextData);

export function PinProvider(props: {
    children: ReactNode
}) {

    const [pin, setPin] = useState('');
    const [hasPin, setHasPin] = useState(false);
    const [logged, setLogged] = useState(false);

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

    const login = (pinTyped: string): boolean => {
        if (pinTyped === pin) {
            setLogged(true);
            return true;
        } 

        return false;
    }

    const logout = () => {
        setLogged(false);
    }

    const verifyIfExistsPin = async () => {
        const pin = await SecureStore.getItemAsync(Keys.PIN);
        
        if (pin) {
            savePin(pin);
        }
    }

    React.useEffect(() => {
        verifyIfExistsPin();
    }, []);

    return (
        <PinContext.Provider value={{
            pin,
            hasPin,
            logged,
            savePin,
            clearPin,
            login,
            logout
        }}>
            {props.children}
        </PinContext.Provider>
    );
}

export default PinContext;