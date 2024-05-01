import { RowID, RowElement } from './interface'

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(row: RowID): void;
declare function updateRow(row: RowID, row: RowElement): RowID;

export { insertRow, deleteRow, updateRow };