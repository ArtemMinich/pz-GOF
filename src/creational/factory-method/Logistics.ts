import { Transport } from "./Transport";

export abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery(): void {
    const transport = this.createTransport();
    console.log(`  ${transport.deliver()}`);
  }
}
