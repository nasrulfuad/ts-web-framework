import { User } from "./models/User";

const user = new User({ name: "John Doe", age: 19 });
user.on("change", () => {
    console.log("change");
});
