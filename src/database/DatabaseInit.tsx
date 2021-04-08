import * as SQLite from 'expo-sqlite';

import { DatabaseConnection } from '../services/DatabaseConnection';

export default class DatabaseInit {

    database: SQLite.WebSQLDatabase;

    constructor() {
        this.database = DatabaseConnection.getConnection();

        this.database.exec([
            { sql: 'PRAGMA foreign_keys = ON;', args: [] }
        ], false, () => {});

        this.initDatabase();
    }

    private initDatabase(): void {
        const sql = `
            CREATE TABLE IF NOT EXISTS CARDS (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                password TEXT,
                color TEXT
            );
        `;

        this.database.transaction(transaction => transaction.executeSql(sql));
    }
}