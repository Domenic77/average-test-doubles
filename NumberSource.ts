export interface NumberSource {
    readNumbers(path: string): number[];
}