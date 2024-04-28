import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let photo;
  let user;

  // return an object with the following format:
  // If one of the async function fails, return an empty object. Example:
  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (error) {
    photo = null;
    user = null;
  }

  const newUser = {
    photo,
    user,
  };
  return newUser;
}
