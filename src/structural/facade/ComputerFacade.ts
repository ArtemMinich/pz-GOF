import { CPU } from "./CPU";
import { Memory } from "./Memory";
import { HardDrive } from "./HardDrive";

export class ComputerFacade {
  private cpu = new CPU();
  private memory = new Memory();
  private hdd = new HardDrive();

  start(): void {
    console.log("  " + this.cpu.freeze());
    console.log("  " + this.hdd.read(0));
    console.log("  " + this.memory.load("BOOT"));
    console.log("  " + this.cpu.execute());
  }

  shutdown(): void {
    console.log("  " + this.cpu.freeze());
  }
}
