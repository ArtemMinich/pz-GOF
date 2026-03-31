import { Sorter } from "./Sorter";
import { BubbleSort } from "./BubbleSort";
import { QuickSort } from "./QuickSort";

export { SortStrategy } from "./SortStrategy";
export { BubbleSort } from "./BubbleSort";
export { QuickSort } from "./QuickSort";
export { Sorter } from "./Sorter";

console.log("\n=== Strategy ===\n");

const data = [38, 27, 43, 3, 9, 82, 10];
console.log(`Вхідні дані: [${data}]\n`);

const sorter = new Sorter(new BubbleSort());
console.log(`  Результат:  [${sorter.run(data)}]\n`);

sorter.setStrategy(new QuickSort());
console.log(`  Результат:  [${sorter.run(data)}]\n`);
