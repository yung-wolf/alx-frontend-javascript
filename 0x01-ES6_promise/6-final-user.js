import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * handleProfileSignup - Handles the profile signup process
 * @param {string} firstName - First name of the user
 * @param {string} lastName - Last name of the user
 * @param {string} fileName - Name of the file to be uploaded
 * @returns {Array} - An array containing the profile details or an error
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  const data = promises.map((res) => {
    if (res.status === 'fulfilled') {
      return res.value;
    }
    return { status: res.status, value: `${res.reason}` };
  });

  return data;
}
