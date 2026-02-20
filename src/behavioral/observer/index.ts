interface Observer {
  update(event: string, data: unknown): void;
}

class EventEmitter {
  private listeners = new Map<string, Observer[]>();

  subscribe(event: string, obs: Observer): void {
    if (!this.listeners.has(event)) this.listeners.set(event, []);
    this.listeners.get(event)!.push(obs);
  }

  unsubscribe(event: string, obs: Observer): void {
    const list = this.listeners.get(event);
    if (list) this.listeners.set(event, list.filter(o => o !== obs));
  }

  protected notify(event: string, data: unknown): void {
    for (const obs of this.listeners.get(event) ?? []) {
      obs.update(event, data);
    }
  }
}

export class Store extends EventEmitter {
  addProduct(name: string, price: number): void {
    this.notify("added", { name, price });
  }

  applyDiscount(name: string, percent: number): void {
    this.notify("discount", { name, percent });
  }
}

export class EmailNotifier implements Observer {
  update(event: string, data: unknown): void {
    const d = data as Record<string, unknown>;
    console.log(`  [Email] ${event}: ${d.name} — ${d.price ?? d.percent + "%"}`);
  }
}

export class Logger implements Observer {
  update(event: string, data: unknown): void {
    console.log(`  [Log] ${event}: ${JSON.stringify(data)}`);
  }
}
