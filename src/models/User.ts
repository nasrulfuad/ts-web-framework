import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attribute } from "./Attribute";

const rootUrl = "http://localhost:3000/users";

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes: Attribute<UserProps>;

    constructor(attrs: UserProps) {
        this.attributes = new Attribute<UserProps>(attrs);
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }

    set(update: UserProps): void {
        this.attributes.set(update);
        this.events.trigger("change");
    }
}
