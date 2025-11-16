import { Average } from "./average.ts";
import { FileAccess } from "./file_access.ts";

function die() {
  console.log(`usage: deno demo.ts mean|median|mode FILE`);
  Deno.exit(1);
}

if (Deno.args.length < 2) {
  die();
}

const stat = Deno.args[0];
const file = Deno.args[1];

const fileAccess: FileAccess = new FileAccess(file);
const average: Average = new Average(fileAccess);

switch (stat) {
  case "mean":
    const mean = await average.computeMeanOfFile();
    console.log(mean);
    break;
  case "median":
    const median = await average.computeMedianOfFile();
    console.log(median);
    break;
  case "mode":
    const modes = await average.computeModeOfFile();
    for (const m of modes) {
      console.log(m);
    }
    break;
  default:
    die();
}
