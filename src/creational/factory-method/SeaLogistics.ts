import { Transport } from "./Transport";
import { Logistics } from "./Logistics";
import { Ship } from "./Ship";

export class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}
