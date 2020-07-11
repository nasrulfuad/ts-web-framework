type Callback = () => void;

/**
 * All methods using arrow because `this` should reference on Eventing class
 */
export class Eventing {
    events: { [key: string]: Callback[] } = {};

    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    };

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];
        if (!handlers || handlers.length === 0) return;
        handlers.forEach(callback => {
            callback();
        });
    };
}
