export class FileAccess {
    readNumbers(path: string): number[] {
        const content = Deno.readTextFileSync(path);
        return content
            .split("\n")
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map(Number);
    }
}
