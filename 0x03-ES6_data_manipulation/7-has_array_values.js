/**
 * hasValuesFromArray - checks if a set contains all values from an array
 * @param {Set} setArg - A set of elements.
 * @param {Array} arrayArg - An array of element(s).
 * @returns - true if all values from the array are in the set, false otherwise.
 */

export default function hasValuesFromArray(setArg, arrayArg) {
  for (const i in arrayArg) {
    if (!setArg.has(arrayArg[i])) {
      return false;
    }
  }
  return true;
}
