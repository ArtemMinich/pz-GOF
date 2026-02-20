export interface SortStrategy {
  name: string;
  sort(data: number[]): number[];
}

export class BubbleSort implements SortStrategy {
  name = "Bubble Sort";

  sort(data: number[]): number[] {
    const a = [...data];
    for (let i = 0; i < a.length; i++)
      for (let j = 0; j < a.length - i - 1; j++)
        if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
    return a;
  }
}

export class QuickSort implements SortStrategy {
  name = "Quick Sort";

  sort(data: number[]): number[] {
    if (data.length <= 1) return [...data];
    const pivot = data[0];
    const left = data.slice(1).filter(x => x <= pivot);
    const right = data.slice(1).filter(x => x > pivot);
    return [...this.sort(left), pivot, ...this.sort(right)];
  }
}

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
