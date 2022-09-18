import { getDatabaseConnection } from "../database";
import { Card } from "../types";
import { extractRows } from "../utils";

const table = "CARDS";
const database = getDatabaseConnection();

export const createCard = (card: Card): Promise<void> =>
  new Promise((resolve) =>
    database.transaction((transaction) => {
      transaction.executeSql(
        `INSERT INTO ${table} (name, password, color) VALUES (?, ?, ?);`,
        [card.name, card.password, card.color],
        () => resolve()
      );
    })
  );

export const updateCard = (cardId: number, card: Card): Promise<void> =>
  new Promise((resolve) =>
    database.transaction((transaction) => {
      transaction.executeSql(
        `UPDATE ${table} SET name = ?, password = ?, color = ? WHERE id = ?;`,
        [card.name, card.password, card.color, cardId],
        () => resolve()
      );
    })
  );

export const deleteCard = (cardId: number): Promise<void> =>
  new Promise((resolve) =>
    database.transaction((transaction) => {
      transaction.executeSql(
        `DELETE FROM ${table} WHERE id = ?;`,
        [cardId],
        () => resolve()
      );
    })
  );

export const deleteAllCards = (): Promise<void> =>
  new Promise((resolve) =>
    database.transaction((transaction) => {
      transaction.executeSql(`DELETE FROM ${table};`, [], () => resolve());
    })
  );

export const listCards = (): Promise<Card[]> =>
  new Promise((resolve) =>
    database.transaction((transaction) => {
      transaction.executeSql(`SELECT * FROM ${table};`, [], (_, { rows }) =>
        resolve(extractRows(rows))
      );
    })
  );
