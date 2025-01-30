/// <reference path="crud.d.ts"/>
import { RowId, RowElement } from "./interface";
import * as CRUD from "./crud";

// Create an object called row with the type RowElement
const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };

// Create a const variable named newRowID with the type RowID and assign the value the insertRow command.
const newRowId: RowId = CRUD.insertRow(row);

// create a const variable named updatedRow with the type RowElement and update row with an age field set to 23
const updatedRow: RowElement = CRUD.updateRow(newRowId, {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
});

// call the updateRow and deleteRow commands.
CRUD.updateRow(newRowId, updatedRow);
CRUD.deleteRow(125);
