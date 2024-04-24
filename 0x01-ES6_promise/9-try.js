/**
 *
 * @param {function} mathFunction - a math function
 */

export default function guardrail(mathFunction) {
  const queue = [];

  // When the mathFunction function is executed
  // the value returned by the function should be appended to the queue.
  // If this function throws an error, the error message should be appended to the queue
  // In every case, the message Guardrail was processed should be added to the queue.
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
