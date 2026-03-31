import { Observer } from "./Observer";

export class Channel {
  private name: string;
  private subscribers: Observer[] = [];

  constructor(name: string) {
    this.name = name;
  }

  subscribe(obs: Observer): void {
    this.subscribers.push(obs);
  }

  unsubscribe(obs: Observer): void {
    this.subscribers = this.subscribers.filter(s => s !== obs);
  }

  publish(video: string): void {
    for (const sub of this.subscribers) {
      sub.notify(`[${this.name}] нове відео: ${video}`);
    }
  }
}
