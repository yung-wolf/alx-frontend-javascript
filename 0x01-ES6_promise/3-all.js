import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const upPhoto = uploadPhoto();
  const newUser = createUser();

  return Promise.all([upPhoto, newUser])
    .then((values) => {
      console.log(values[0].body, values[1].firstName, values[1].lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
