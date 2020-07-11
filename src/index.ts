import { User } from "./models/User";

const user = new User({ name: "John Doe", age: 19 });
user.on("change", () => console.log("Updated"));

console.log(user.get("name"));
user.set({ name: "Johny" });
console.log(user.get("name"));
