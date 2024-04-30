/**
 * updateUniqueItems - UPDATES items in a map
 * @param {Map} mapArg - Map argument
 */

export default function updateUniqueItems(mapArg) {
  try {
    const mapKeys = mapArg.keys();

    for (const key of mapKeys) {
      if (mapArg.get(key) === 1) {
        mapArg.set(key, 100);
      }
    }
  } catch (error) {
    throw new Error('Cannot process');
  }
  return mapArg;
}
