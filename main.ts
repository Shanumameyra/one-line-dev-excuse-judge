import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My code didn't break in production, it met real users for the first time and immediately chose violence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
