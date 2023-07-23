import { createContext, ReactNode, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import * as SQLite from "expo-sqlite";
import { useNotification } from "../hooks/useNotification";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppContextData = {
  database: SQLite.WebSQLDatabase;
  logged: boolean;
  pin: string;
  savePin(pin: string): Promise<void>;
  changePin(newPin: string): Promise<void>;
  clearAccount(): Promise<void>;
  login(pin: string): void;
  logout(): void;
};

const PIN_KEY = "PASSPORT.PIN";
const DB_KEY = "PASSCARD.DB";

export const AppContext = createContext<AppContextData>({} as AppContextData);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const database = SQLite.openDatabase(DB_KEY);

  const [logged, setLogged] = useState(false);
  const [pin, setPin] = useState("");
  const { showSnack } = useNotification();

  const savePin = async (pin: string) => {
    let message: string = "";

    if (!pin) {
      message = "PIN is required";
    } else if (!pin?.match(/^[0-9]+$/)) {
      message = "Is allowed only numeric characters";
    }

    if (message) {
      showSnack(message);
      return Promise.reject();
    }

    setPin(pin);
    await SecureStore.setItemAsync(PIN_KEY, pin);

    showSnack("PIN has been saved");
  };

  const changePin = async (newPing: string) => {
    if (newPing == pin) {
      savePin(newPing);
    } else {
      showSnack("The new PIN does not match the saved");
    }
  };

  const clearAccount = async () => {
    database.transaction((transaction) => {
      transaction.executeSql(`DELETE FROM CARDS`, []);
    });

    await AsyncStorage.clear();
    await SecureStore.deleteItemAsync(PIN_KEY);
    logout();
  };

  const login = (enteredPin: string) => {
    if (enteredPin === pin) {
      setLogged(true);
    } else {
      showSnack("Wrong PIN!");
    }
  };

  const logout = () => {
    setLogged(false);
    setPin("");
  };

  const initDatabase = () => {
    const sql = `
            CREATE TABLE IF NOT EXISTS CARDS (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                password TEXT,
                color TEXT
            );
        `;

    database.transaction((transaction) => transaction.executeSql(sql));
  };

  const verifyIfHasPin = async () => {
    const pin = await SecureStore.getItemAsync(PIN_KEY);
    setPin(pin || "");
  };

  useEffect(() => {
    initDatabase();
    verifyIfHasPin();
  }, []);

  return (
    <AppContext.Provider
      value={{
        database,
        logged,
        pin,
        savePin,
        changePin,
        clearAccount,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
