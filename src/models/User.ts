import { Model } from "./Model";
import { Attribute } from "./Attribute";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";

const rootUrl = "http://localhost:3000/users";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User extends Model<UserProps> {
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attribute<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }
}
