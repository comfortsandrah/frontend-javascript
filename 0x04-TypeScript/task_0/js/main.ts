interface Student {
  firstName: string;
  lastname: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Sandrah",
  lastname: "Lewa",
  age: 20,
  location: "juja",
};
const student2: Student = {
  firstName: "Andrew",
  lastname: "Lewa",
  age: 12,
  location: "Kwale",
};
const studentList: Student[] = [student1, student2];

function createTable() {
  const table = document.createElement("table");
  const tableheaders = ["firstname", "lastname", "age", "location"];
  const tableRow = document.createElement("tr");
  tableheaders.forEach((header) => {
    const thead = document.createElement("th");
    thead.textContent = header;
    tableRow.appendChild(thead);
  });
  table.appendChild(tableRow)
  for (let i = 0; i < studentList.length; i++) {
    const trow = document.createElement("tr");
    table.appendChild(trow);
    const tdElement1 = document.createElement("td");
    tdElement1.innerHTML = studentList[i].firstName;
    trow.appendChild(tdElement1);
    const tdElement2 = document.createElement("td");
    tdElement2.innerHTML = studentList[i].lastname;
    trow.appendChild(tdElement2);
    const tdElement3 = document.createElement("td");
    tdElement3.innerHTML = studentList[i].age.toString();
    trow.appendChild(tdElement3);
    const tdElement4 = document.createElement("td");
    tdElement4.innerHTML = studentList[i].location;
    trow.appendChild(tdElement4);
  }

  document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", createTable);
