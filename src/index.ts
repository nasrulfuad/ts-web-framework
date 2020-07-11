import { User } from "./models/User";

const user = new User({ name: "john doe", age: 10 });
user.on("save", () => console.log(user));

user.save();
