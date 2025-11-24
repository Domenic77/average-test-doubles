import { Average } from "../average.ts";
import { FixedStub } from "../stub.ts";
import { expect } from "@std/expect";

Deno.test("Stub – computeMeanOfFile (fixed)", () => {
    const avg = new Average(new FixedStub());
    expect(avg.computeMeanOfFile("x")).toBe(20);
});
