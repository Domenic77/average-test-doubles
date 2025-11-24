import { Average } from "../average.ts";
import { MockNumberSource } from "../Mock.ts";
import { expect } from "@std/expect";

Deno.test("Mock – verifies that readNumbers is called", () => {
    const mock = new MockNumberSource();
    const avg = new Average(mock);

    expect(avg.computeMeanOfFile("x")).toBe(5);
    expect(mock.calls).toBe(1);
});
