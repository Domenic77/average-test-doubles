import { IFileReader } from "../IFileReader";

export class FakeFileReader implements IFileReader {
    private files = new Map<string, number[]>();

    addFile(path: string, numbers: number[]) {
        this.files.set(path, numbers);
    }

    readNumbers(path: string): number[] {
        return this.files.get(path) ?? [];
    }
}
