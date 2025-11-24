import { NumberSource } from "../average-test-doubles/NumberSource.ts";
import { FileAccess } from "../average-test-doubles/file_access.ts";

export class SpyNumberSource implements NumberSource {
    public calls = 0;
    public returnedValues: number[] = [];

    constructor(private real: FileAccess) {}

    readNumbers(path: string): number[] {
        this.calls++;
        const nums = this.real.readNumbers(path);
        this.returnedValues = nums;
        return nums;
    }
}
