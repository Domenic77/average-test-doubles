import { NumberSource } from "../average-test-doubles/NumberSource.ts";

export class MockNumberSource implements NumberSource {
    public calls = 0;

    readNumbers(): number[] {
        this.calls++;
        return [5, 5, 5];
    }
}
