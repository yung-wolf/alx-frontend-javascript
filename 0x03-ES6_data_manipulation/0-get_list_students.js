/**
 * getListStudents
 * @returns {Array} - An array of objects
 */
export default function getListStudents() {
  const classroom = [];

  const student1 = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const student2 = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  const student3 = {
    id: 5,
    firstName: 'Serena',
    location: ' San Francisco',
  };

  classroom.push(student1);
  classroom.push(student2);
  classroom.push(student3);

  return Array.from(classroom);
}
