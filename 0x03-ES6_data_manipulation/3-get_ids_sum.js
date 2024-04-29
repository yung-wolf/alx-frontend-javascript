import getListStudentIds from './1-get_list_student_ids';
/**
 * getStudentIdsSum
 * @param {*} studentList 
 * @returns returns the sum of all the student ids.
 */
export default function getStudentIdsSum(studentList) {
  const ids = getListStudentIds(studentList);
  const result = ids.reduce((accumulator, currentValue) => accumulator + currentValue);
  return result;
}
