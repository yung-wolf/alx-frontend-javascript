/**
 * cleanSet - Removes all elements from the set that do not start with the given string.
 * @param {set} setArg - A set of elements
 * @param {String} strArg - String arggument to compare set with.
 * @returns - On success, return a string of elements with strArg removed.
 * On failure, return an empty string.
 */

export default function cleanSet(setArg, strArg) {
  for (const i of setArg) {
    if (!i.includes(strArg)) {
      setArg.delete(i);
    }
  }

  // return if strArg is empty
  if (strArg === '') {
    return '';
  }

  const setArgToArray = Array.from(setArg);
  const names = [];

  for (const name of setArgToArray) {
    names.push(name.slice(strArg.length));
  }

  return names.join('-');
}
