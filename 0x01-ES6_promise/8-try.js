/**
 * divideFunction - returns the quotient of two nums.
 * @param {number} numerator - numerator number.
 * @param {number} denominator - denominator number. Must be > 0.
 * @returns {number/error obj} - On success quotient, on failure... error
 */

export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
