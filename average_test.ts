import { IFileReader } from "./IFileReader";

export class Average {

    constructor(private fileReader: IFileReader) {}

    computeMeanOfFile(path: string): number {
        const nums = this.fileReader.readNumbers(path);
        if (nums.length === 0) return 0;
        return nums.reduce((a, b) => a + b, 0) / nums.length;
    }

    computeMedianOfFile(path: string): number {
        const nums = this.fileReader.readNumbers(path);
        if (nums.length === 0) return 0;

        nums.sort((a, b) => a - b);
        const mid = Math.floor(nums.length / 2);

        return nums.length % 2 !== 0
            ? nums[mid]
            : (nums[mid - 1] + nums[mid]) / 2;
    }

    computeModeOfFile(path: string): number[] {
        const nums = this.fileReader.readNumbers(path);
        if (nums.length === 0) return [];

        const freq: Record<number, number> = {};
        nums.forEach(n => freq[n] = (freq[n] ?? 0) + 1);

        const max = Math.max(...Object.values(freq));
        return Object.entries(freq)
            .filter(([_, v]) => v === max)
            .map(([k]) => Number(k));
    }
}
