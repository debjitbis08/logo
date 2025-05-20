import { Instruction, LogoExecutor } from "./instruction";

export class InstructionRecorder implements LogoExecutor {
  instructions: Instruction[] = [];

  move(distance: number) {
    this.instructions.push({ type: "move", distance });
  }

  turn(angle: number) {
    this.instructions.push({ type: "turn", angle });
  }

  pen(mode: "up" | "down") {
    this.instructions.push({ type: "pen", mode });
  }

  label(value: string) {
    this.instructions.push({ type: "label", value });
  }

  setxy(x: number, y: number) {
    this.instructions.push({ type: "setxy", x, y });
  }

  clear() {
    this.instructions.push({ type: "clear" });
  }
}
