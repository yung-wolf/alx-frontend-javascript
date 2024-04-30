/**
 * updateStudentGradeByCity
 * @param {Array of objects} studentList
 * @param {String} city
 * @param {Array of objects} newGrades
 * @returns returns an array of students for a specific city with their new grade
 */
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // use filter() to get students from city param.
  const newStudents = studentList.filter((student) => student.location === city);

  // use map to compare each students id with the ids in newGrades
  const newStudentsGrades = newStudents.map((student) => {
    for (const record of newGrades) {
      if (student.id === record.studentId) {
        // const newObj = Object.assign({}, obj, { email: 'john@example.com' });
        return { ...student, grade: record.grade };
      }
    }
    return { ...student, grade: 'N/A' };
  });

  return newStudentsGrades;
}
