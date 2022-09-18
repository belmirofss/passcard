import * as SQLite from "expo-sqlite";

export const getDatabaseConnection = (): SQLite.WebSQLDatabase =>
  SQLite.openDatabase("PASSCARD.DB");

export default class Database {
  database: SQLite.WebSQLDatabase;

  constructor() {
    this.database = getDatabaseConnection();
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

    this.database.transaction((transaction) => transaction.executeSql(sql));
  }
}
