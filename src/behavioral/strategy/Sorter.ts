import { SortStrategy } from "./SortStrategy";

export class Sorter {
  constructor(private strategy: SortStrategy) {}

  setStrategy(s: SortStrategy): void {
    this.strategy = s;
  }

  run(data: number[]): number[] {
    console.log(`  Стратегія: ${this.strategy.name}`);
    return this.strategy.sort(data);
  }
}
