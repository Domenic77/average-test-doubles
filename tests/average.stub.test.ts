import { Average } from "../average.ts";
import { StubStatic } from "./StubStatic.ts";
import { expect } from "@std/expect";

Deno.test("mean with static stub", () => {
    const avg = new Average(new StubStatic());
    expect(avg.computeMeanOfFile("ignored")).toBe(20);
});

