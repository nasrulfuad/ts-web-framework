import { User } from './models/User';

const user = new User({
  id: 1,
});
user.fetch();

setTimeout(function () {
  console.log(user);
}, 1000);
