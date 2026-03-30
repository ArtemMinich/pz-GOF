import { Transport } from "./Transport";

export class Ship implements Transport {
  deliver(): string {
    return "Доставка по морю у контейнері";
  }
}
