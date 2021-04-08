import * as SQLite from 'expo-sqlite';

export const DatabaseConnection = {
    getConnection: (): SQLite.WebSQLDatabase => SQLite.openDatabase("PASSCARD.DB"),
};