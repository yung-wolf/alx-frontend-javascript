import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * handleProfileSignup - Handles the profile signup process
 * @param {string} firstName - First name of the user
 * @param {string} lastName - Last name of the user
 * @param {string} fileName - Name of the file to be uploaded
 * @returns {Promise} - A promise that resolves with an array containing the profile details or rejects with an error
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise])
    .then((results) => {
      const settledPromises = results.filter(result => result.status !== 'pending');
      const pendingPromises = results.filter(result => result.status === 'pending');

      if (pendingPromises.length === 0 && settledPromises.length === 2) {
        const userProfile = settledPromises[0].value;
        const photoDetails = settledPromises[1].reason;

        return [userProfile, photoDetails];
      } else if (pendingPromises.length > 0) {
        throw new Error('All promises are not settled');
      } else {
        throw new Error('User signup and photo upload failed');
      }
    });
}
