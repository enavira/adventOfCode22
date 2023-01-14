import { readLines } from "https://deno.land/std@0.172.0/io/mod.ts";

const part1 = async () => {
  const file = await Deno.open("input.txt");
  let maxCaloriesPerElf = 0;
  let maxCalories = 0;
  for await (const line of readLines(file)) {
    if (line === "") {
      maxCalories = Math.max(maxCalories, maxCaloriesPerElf);
      maxCaloriesPerElf = 0;
      continue;
    }
    maxCaloriesPerElf += parseInt(line);
  }
  console.log(maxCalories);
};

const part2 = async () => {
  const file = await Deno.open("input.txt");
  let maxCaloriesPerElf = 0;
  const maxCalories: number[] = [0, 0, 0];
  for await (const line of readLines(file)) {
    if (line === "") {
      const minIndex = maxCalories.indexOf(Math.min(...maxCalories));
      maxCalories[minIndex] = Math.max(
        maxCaloriesPerElf,
        maxCalories[minIndex]
      );
      maxCaloriesPerElf = 0;
      continue;
    }
    maxCaloriesPerElf += parseInt(line);
  }
  console.log(maxCalories.reduce((a, b) => a + b, 0));
};

await part1();
await part2();
