import { NumberSource } from "../average-test-doubles/NumberSource.ts";

export class Average {
    constructor(private source: NumberSource) {}

    computeMeanOfFile(path: string): number {
        const nums = this.source.readNumbers(path);
        if (nums.length === 0) return 0;
        return nums.reduce((a, b) => a + b, 0) / nums.length;
    }
}
