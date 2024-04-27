export default function* createIteratorObject(reportObject) {
  // Iterate through each department
  for (const department of Object.keys(reportObject.allEmployees)) {
    // Iterate through each employee in the department
    for (const employee of reportObject.allEmployees[department]) {
      yield employee;
    }
  }
}
