// ambient file 
import {RowId,RowElement} from "./interface.ts";
export function insertRow(row: RowElement): number; 
  
export function deleteRow(rowId: RowId): void; 
  
export function updateRow(rowId:RowId, row:RowElement): RowElement; 