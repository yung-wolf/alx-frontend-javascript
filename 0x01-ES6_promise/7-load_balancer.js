/**
 * loadBalancer - Returns the faster download server
 * @param {Promise} chinaDownload - Promise to China server
 * @param {Promise} USDownload - Promise to US server
 * @returns {Promise} - First Promise to resolve.
 */

export default async function loadBalancer(chinaDownload, USDownload) {
  try {
    const res = await Promise.race([chinaDownload, USDownload]);
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
