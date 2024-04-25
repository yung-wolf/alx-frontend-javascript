/**
 * HolbertonCourse - A course offered from ClassRoom
 * @param {string} name
 * @param {number} length
 * @param {array of strings} students
 */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? name : null;
    this._length = typeof length === 'number' ? length : null;
    this._students = Array.isArray(students) ? students : null;

    if (this._name === null) {
      throw TypeError('Name must be a string');
    } else if (this._length === null) {
      throw TypeError('Length must be a number');
    } else if (this._students === null) {
      throw TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = typeof newName === 'string' ? newName : null;
    if (this._name === null) {
      throw TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = typeof newLength === 'number' ? newLength : null;
    if (this._length === null) {
      throw TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = Array.isArray(newStudents) ? newStudents : null;
    if (this._students === null) {
      throw TypeError('Students must be an array of strings');
    }
  }
}
