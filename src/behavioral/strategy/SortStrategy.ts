export interface SortStrategy {
  name: string;
  sort(data: number[]): number[];
}
