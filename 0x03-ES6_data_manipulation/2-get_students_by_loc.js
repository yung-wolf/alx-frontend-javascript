/**
 * getStudentsByLocation - that returns an array of objects who are located in a specific city.
 * @param {Array of objects} studentList
 * @param {String} city
 * @returns {Array of objects} - array of objects who are located in a specific city.
 */

export default function getStudentsByLocation(studentList, city) {
  const result = studentList.filter((student) => student.location === city);
  return result;
}
