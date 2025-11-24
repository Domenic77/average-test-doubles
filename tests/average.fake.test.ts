import { NumberSource } from "../NumberSource.ts";

export class FileAccess implements NumberSource {
    readNumbers(_path: string): number[] {
        const content: string = `3 6 9`;

        return content
            .split("\n")
            .map((line: string) => line.trim())
            .filter((line: string) => line.length > 0)
            .map(Number);
    }
}