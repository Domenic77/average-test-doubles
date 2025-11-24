import { IFileReader } from "../IFileReader";

export class StubStatic implements IFileReader {
    readNumbers(): number[] {
        return [10, 20, 30];
    }
}
