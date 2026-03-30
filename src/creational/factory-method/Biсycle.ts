import { Transport } from "./Transport";

export class Biсycle implements Transport {
  deliver(): string {
    return "Доставка по дорозі на велосипеді";
  }
}
