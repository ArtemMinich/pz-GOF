export class HardDrive {
  read(sector: number): string { return `HDD: read sector ${sector}`; }
}
