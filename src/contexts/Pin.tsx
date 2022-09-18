import React, { createContext, ReactNode, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";

type PinContextData = {
  pin: string;
  hasPin: boolean;
  logged: boolean;
  savePin(pin: string): Promise<void>;
  clearPin(): Promise<void>;
  login(typedPin: string): boolean;
  logout(): void;
};

const PIN_KEY = "PASSPORT.PIN";

const PinContext = createContext<PinContextData>({} as PinContextData);

export function PinProvider({ children }: { children: ReactNode }) {
  const [pin, setPin] = useState("");
  const [hasPin, setHasPin] = useState(false);
  const [logged, setLogged] = useState(false);

  const savePin = async (pin: string) => {
    if (!pin) return;

    await SecureStore.setItemAsync(PIN_KEY, pin);
    setPin(pin);
    setHasPin(true);
  };

  const clearPin = async () => {
    await SecureStore.deleteItemAsync(PIN_KEY);
    setPin("");
    setHasPin(false);
  };

  const login = (pinTyped: string): boolean => {
    if (pinTyped === pin) {
      setLogged(true);
      return true;
    }

    return false;
  };

  const logout = () => {
    setLogged(false);
  };

  const verifyIfExistsPin = async () => {
    const pin = await SecureStore.getItemAsync(PIN_KEY);

    if (!pin) return null;

    savePin(pin);
  };

  useEffect(() => {
    verifyIfExistsPin();
  }, []);

  return (
    <PinContext.Provider
      value={{
        pin,
        hasPin,
        logged,
        savePin,
        clearPin,
        login,
        logout,
      }}
    >
      {children}
    </PinContext.Provider>
  );
}

export default PinContext;
