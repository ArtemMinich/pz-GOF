import { Channel } from "./Channel";
import { EmailSubscriber } from "./EmailSubscriber";
import { TelegramSubscriber } from "./TelegramSubscriber";

export { Observer } from "./Observer";
export { Channel } from "./Channel";
export { EmailSubscriber } from "./EmailSubscriber";
export { TelegramSubscriber } from "./TelegramSubscriber";

console.log("=== Observer ===\n");

const channel = new Channel("GoF Patterns");

const email = new EmailSubscriber("user@gmail.com");
const telegram = new TelegramSubscriber("temic");

channel.subscribe(email);
channel.subscribe(telegram);

console.log("Публікуємо відео:");
channel.publish("Observer за 5 хвилин");

console.log("\nВідписуємо email:");
channel.unsubscribe(email);

console.log("Публікуємо ще відео:");
channel.publish("Strategy за 5 хвилин");
