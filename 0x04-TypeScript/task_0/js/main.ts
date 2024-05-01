interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Wick',
  age: 44,
  location: 'New York',
}

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Las Vegas',
}

const studentsList: Array<Student> = [student1, student2];

for (const student of studentsList) {
  console.log(student.firstName, student.location);
}

function renderTable(): void {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  const tcaption = document.createElement("caption");
  const headerRow = document.createElement("tr");
  const firstNameHeader = document.createElement("th");
  const locationHeader = document.createElement("th");

  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";
  tcaption.textContent = "Students List";

  table.appendChild(tcaption);
  headerRow.appendChild(firstNameHeader);
  headerRow.appendChild(locationHeader);
  tbody.appendChild(headerRow);

  table.style.border = "1px solid black";
  table.style.width = "50%";
  table.style.textAlign = "center";
  table.style.borderCollapse = "collapse";
  table.style.margin = "300px auto";
  tcaption.style.fontSize = "30px";
  firstNameHeader.style.padding = "10px";
  locationHeader.style.padding = "10px";
  locationHeader.style.border = "1px solid black";

  studentsList.forEach(student => {

    const row = document.createElement("tr");
    const firstNameCell = document.createElement("td");
    const locationCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    firstNameCell.style.border = "1px solid black";
    firstNameCell.style.padding = "10px";
    locationCell.style.border = "1px solid black";
    locationCell.style.padding = "10px";

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  document.body.appendChild(table);
}

renderTable();
