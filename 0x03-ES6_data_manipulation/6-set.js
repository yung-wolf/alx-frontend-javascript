/**
 * setFromArray - creates a Set from an array.
 * @param {Array of any kind of elements} arrayArg - An array of elements.
 * @returns -  returns a Set from an array.
 */
export default function setFromArray(arrayArg) {
  const set = new Set(arrayArg);
  return set;
}
