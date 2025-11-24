import { NumberSource } from "./NumberSource.ts";

export class FakeNumberSource implements NumberSource {
    private files = new Map<string, number[]>();

    addFile(path: string, numbers: number[]) {
        this.files.set(path, numbers);
    }

    readNumbers(path: string): number[] {
        return this.files.get(path) ?? [];
    }
}