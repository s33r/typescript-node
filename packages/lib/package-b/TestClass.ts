export interface TestClassBag {
    name: string;
    type: string;
    truth: boolean;
}

export default class TestClass implements Readonly<TestClassBag> {
    readonly #name: string;
    readonly #type: string;
    readonly #truth: boolean;

    constructor(data?: Partial<TestClassBag>) {
        this.#name = data?.name ?? '';
        this.#type = data?.type ?? '';
        this.#truth = data?.truth ?? true;
    }

    get name() { return this.#name; }
    get type() { return this.#type; }
    get truth() { return this.#truth; }
}