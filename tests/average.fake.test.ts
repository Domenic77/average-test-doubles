import * as fs from "fs";
import { NumberSource } from "../NumberSource.ts";

export class FileAccess implements NumberSource {
    readNumbers(path: string): number[] {
        const content = fs.readFileSync(path, "utf-8");
        return content
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(Number);
    }
}