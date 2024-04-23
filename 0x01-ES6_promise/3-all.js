import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const upPhoto = uploadPhoto();
  const newUser = createUser();

  return Promise.all([newUser, upPhoto])
    .then((values) => {
      console.log(values[1].body, values[0].firstName, values[0].lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
