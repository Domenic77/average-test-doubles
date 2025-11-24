import { Average } from "../average.ts";
import { FileAccess } from "../file_access.ts";
import { SpyNumberSource } from "../spy.ts";
import { expect } from "@std/expect";

Deno.test("Spy – records calls and returned values", () => {
    const file = "/tmp/test-numbers.txt";
    const spy = new SpyNumberSource(new FileAccess());
    const avg = new Average(spy);

    expect(avg.computeMeanOfFile(file)).toBe(6);

    expect(spy.calls).toBe(1);
    expect(spy.returnedValues).toEqual([3, 6, 9]);
});
