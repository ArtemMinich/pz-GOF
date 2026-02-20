class CPU {
  freeze(): string { return "CPU: freeze"; }
  execute(): string { return "CPU: execute"; }
}

class Memory {
  load(data: string): string { return `Memory: load "${data}"`; }
}

class HardDrive {
  read(sector: number): string { return `HDD: read sector ${sector}`; }
}

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
