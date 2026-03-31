import { SortStrategy } from "./SortStrategy";

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
