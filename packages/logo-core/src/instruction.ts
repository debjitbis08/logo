export type Instruction =
  | { type: "move"; distance: number }
  | { type: "turn"; angle: number }
  | { type: "pen"; mode: "up" | "down" }
  | { type: "label"; value: string }
  | { type: "setxy"; x: number; y: number }
  | { type: "clear" };

export interface LogoExecutor {
  move(distance: number): void;
  turn(angle: number): void;
  pen(mode: "up" | "down"): void;
  label(value: string): void;
  setxy(x: number, y: number): void;
  clear(): void;
}
