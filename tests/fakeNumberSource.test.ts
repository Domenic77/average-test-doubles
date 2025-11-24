import { Average } from "../average.ts";
import { FakeNumberSource } from "../FakeNumberSource.ts";

import { expect } from "@std/expect";


Deno.test("Fake – computeMeanOfFile", () => {
    const fake = new FakeNumberSource();
    fake.addFile("data.txt", [1, 2, 3, 4]);

    const avg = new Average(fake);
    expect(avg.computeMeanOfFile("data.txt")).toBe(2.5);
});
