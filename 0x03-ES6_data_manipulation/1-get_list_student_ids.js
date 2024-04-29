/**
 * getListStudentIds
 * @param {Array of objects} studentObjects - format == getListStudents from the previous task.
 * @returns {Array of ids} - an array of ids from a list of object.
 */
export default function getListStudentIds(studentObjects) {
  if (!Array.isArray(studentObjects)) {
    return [];
  }
  const ids = studentObjects.map((student) => student.id);

  return ids;
}
