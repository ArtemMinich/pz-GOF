interface Transport {
  deliver(): string;
}

class Truck implements Transport {
  deliver(): string {
    return "Доставка по дорозі у вантажівці";
  }
}

class Ship implements Transport {
  deliver(): string {
    return "Доставка по морю у контейнері";
  }
}

abstract class Logistics {
  abstract createTransport(): Transport;

  planDelivery(): void {
    const transport = this.createTransport();
    console.log(`  ${transport.deliver()}`);
  }
}

export class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck();
  }
}

export class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship();
  }
}
