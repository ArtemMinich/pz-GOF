import { Transport } from "./Transport";
import { Logistics } from "./Logistics";
import { Truck } from "./Truck";
import {Biсycle} from "./Biсycle";

export class BiсycleLogistics extends Logistics {
  createTransport(): Transport {
    return new Biсycle();
  }
}
