/**
 * createInt8TypedArray
 * @param {Number} length
 * @param {Number} position
 * @param {Number} value
 * @returns - new ArrayBuffer with an Int8 value at a specific position.
 */
export default function createInt8TypedArray(length, position, value) {
  // create a new Int8Array typed array with a length of 10
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new DataView(buffer);
  int8View.setInt8(position, value);

  return int8View;
}
