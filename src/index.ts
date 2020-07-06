import { User } from "./models/User";

const user = new User({ name: "John Doe", age: 19 });

user.events.on("change", () => {
    console.log("Siapp");
});

user.events.trigger("change");
