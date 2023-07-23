import { useEffect, useState } from "react";
import { useAppContext } from "./useAppContext";
import { Card } from "../types";
import { MAX_LENGTH_NAME, MAX_LENGTH_PASSWORD } from "../constants";
import { useNotification } from "./useNotification";
import { SQLResultSetRowList } from "expo-sqlite";

export const extractRows = (rows: SQLResultSetRowList): Card[] => {
  const rowsExtracted = [];

  for (let i = 0; i < rows.length; i++) {
    rowsExtracted.push(rows.item(i));
  }

  return rowsExtracted;
};

export const useCards = () => {
  const { database } = useAppContext();
  const { showSnack } = useNotification();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Card[]>([]);

  const list = () => {
    setIsLoading(true);
    setData([]);

    database.transaction((transaction) => {
      transaction.executeSql(`SELECT * FROM CARDS;`, [], (_, { rows }) => {
        setData(extractRows(rows));
        setIsLoading(false);
      });
    });
  };

  const save = async (card: Card) => {
    let message = "";

    if (!card.name) {
      message = "Name is required";
    } else if (card.name.length > MAX_LENGTH_NAME) {
      message = `Name is too big, the max lengh is ${MAX_LENGTH_NAME}`;
    } else if (!card.password) {
      message = "Password is required";
    } else if (card.password.length > MAX_LENGTH_PASSWORD) {
      message = `Password is too big, the max lengh is ${MAX_LENGTH_PASSWORD}`;
    } else if (!card.password.match(/^[0-9]+$/)) {
      message = "Password is invalid, is allowed only numeric characters";
    } if (!card.color) {
      message = "Color is required";
    }

    if (message.length) {
      showSnack(message);
      return Promise.reject();
    }

    if (card.id) {
      await update(card.id, card);
    } else {
      await create(card);
    }
  };

  const create = (card: Card) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `INSERT INTO CARDS (name, password, color) VALUES (?, ?, ?);`,
        [card.name, card.password, card.color],
        () => {
          showSnack("Card has been created!");
          list();
        }
      );
    });
  };

  const update = (cardId: number, card: Card) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `UPDATE CARDS SET name = ?, password = ?, color = ? WHERE id = ?;`,
        [card.name, card.password, card.color, cardId],
        () => {
          showSnack("Card has been updated!");
          list();
        }
      );
    });
  };

  const remove = (cardId: number) => {
    database.transaction((transaction) => {
      transaction.executeSql(
        `DELETE FROM CARDS WHERE id = ?;`,
        [cardId],
        () => {
          showSnack("Card has been deleted!");

          list();
        }
      );
    });
  };

  useEffect(() => {
    list();
  }, []);

  return {
    isLoading,
    data,
    save,
    remove,
  };
};
