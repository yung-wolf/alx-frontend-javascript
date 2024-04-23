export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const x of array) {
    const value = x;
    newArray.push(appendString + value);
  }

  return newArray;
}
