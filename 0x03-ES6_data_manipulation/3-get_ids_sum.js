import getListStudentIds from "./1-get_list_student_ids";

export default function getStudentIdsSum(studentList) {
  const ids = getListStudentIds(studentList);
  const result = ids.reduce((accumulator, currentValue) => accumulator + currentValue);
  return result;
}

import getListStudents from "./0-get_list_students.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);
