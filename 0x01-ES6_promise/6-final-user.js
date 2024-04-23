import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const newUser = signUpUser(firstName, lastName);
  const picture = uploadPhoto(fileName);

  Promise.allSettled([newUser, picture])
    .then(console.log);
}
