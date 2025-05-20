import { describe, it, expect } from "vitest";
import { InstructionRecorder } from "../src/executors/InstructionRecorder";
import { evaluate } from "../src/evaluate";

describe("FORWARD instruction", () => {
  it("should emit a move instruction with correct distance", () => {
    const recorder = new InstructionRecorder();
    evaluate("FORWARD 50 + 50", recorder);

    expect(recorder.instructions).toEqual([{ type: "move", distance: 100 }]);
  });
  it("should emit a move instruction with correct distance case insensitive", () => {
    const recorder = new InstructionRecorder();
    evaluate("forward 50 + 50", recorder);

    expect(recorder.instructions).toEqual([{ type: "move", distance: 100 }]);
  });
  it("should work with FD", () => {
    const recorder = new InstructionRecorder();
    evaluate("FD 50 + 50", recorder);

    expect(recorder.instructions).toEqual([{ type: "move", distance: 100 }]);
  });
  it("should emit a move instruction with correct distance for multiple forwards", () => {
    const recorder = new InstructionRecorder();
    evaluate(
      `
      FORWARD 50 + 50
      FORWARD 40
    `,
      recorder,
    );

    expect(recorder.instructions).toEqual([
      { type: "move", distance: 100 },
      { type: "move", distance: 40 },
    ]);
  });
});
