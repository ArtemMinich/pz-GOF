import { Transport } from "./Transport";

export class Truck implements Transport {
  deliver(): string {
    return "Доставка по дорозі у вантажівці";
  }
}
