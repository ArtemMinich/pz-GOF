import { Observer } from "./Observer";

export class EmailSubscriber implements Observer {
  constructor(private email: string) {}

  notify(message: string): void {
    console.log(`  [Email: ${this.email}] ${message}`);
  }
}
