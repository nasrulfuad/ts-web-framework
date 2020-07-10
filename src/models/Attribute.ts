export class Attribute<T> {
    constructor(private data: T) {}

    /**
     * @param key reference to type of T keys (name, age, id) types
     */
    get<K extends keyof T>(key: K): T[K] {
        return this.data[key];
    }

    set(update: T): void {
        (<any>Object).assign(this.data, update);
    }
}
