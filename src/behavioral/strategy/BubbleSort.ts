import { SortStrategy } from "./SortStrategy";

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
