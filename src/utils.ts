import { SQLResultSetRowList } from "expo-sqlite";

export function extractRows(rows: SQLResultSetRowList): any[] {
  const rowsExtracted = [];

  for (let i = 0; i < rows.length; i++) {
    rowsExtracted.push(rows.item(i));
  }

  return rowsExtracted;
}
