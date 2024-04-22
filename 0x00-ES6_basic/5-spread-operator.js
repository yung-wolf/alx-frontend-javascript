// Using spread syntax, concatenate 2 arrays and each character of a string
// into a single array. Then, return the resulting array.

export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
