import { NumberSource } from "../average-test-doubles/NumberSource.ts";

export class FixedStub implements NumberSource {
    readNumbers(): number[] {
        return [10, 20, 30];
    }
}
