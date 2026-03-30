import { ComputerFacade } from "./ComputerFacade";

export { CPU } from "./CPU";
export { Memory } from "./Memory";
export { HardDrive } from "./HardDrive";
export { ComputerFacade } from "./ComputerFacade";

console.log("\n=== Facade ===\n");

const pc = new ComputerFacade();

console.log("Запуск:");
pc.start();

console.log("Вимкнення:");
pc.shutdown();
