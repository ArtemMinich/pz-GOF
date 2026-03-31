import { Observer } from "./Observer";

export class TelegramSubscriber implements Observer {
  constructor(private username: string) {}

  notify(message: string): void {
    console.log(`  [Telegram: @${this.username}] ${message}`);
  }
}
