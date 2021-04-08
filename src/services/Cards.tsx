import { Card } from "../models/Card";
import { DatabaseConnection } from "./DatabaseConnection";

const table = "CARDS";
const database = DatabaseConnection.getConnection();

export default {
    create: (card: Card): Promise<void> => new Promise(
        resolve => database.transaction(
            transaction => {
                transaction.executeSql(
                    `INSERT INTO ${table} VALUES (?)`, 
                    [card.name, card.password, card.color],
                    () => resolve()
                )
            }
        )
    ),
    update: (cardId: number, card: Card): Promise<void> => new Promise(
        resolve => database.transaction(
            transaction => {
                transaction.executeSql(
                    `UPDATE ${table} SET name = ?, password = ?, color = ? WHERE id = ?`, 
                    [card.name, card.password, card.color, cardId],
                    () => resolve()
                )
            }
        )
    ),
    delete: (cardId: number): Promise<void> => new Promise(
        resolve => database.transaction(
            transaction => {
                transaction.executeSql(
                    `DELETE FROM ${table} WHERE id = ?`, 
                    [cardId],
                    () => resolve()
                )
            }
        )
    ),
    list: (): Promise<Card[]> => new Promise(
        resolve => database.transaction(
            transaction => {
                transaction.executeSql(
                    `SELECT * FROM ${table}`, 
                    [],
                    (_, { rows }) => console.log(rows)
                )
            }
        )
    ),
}