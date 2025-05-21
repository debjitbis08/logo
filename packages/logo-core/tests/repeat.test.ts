import { describe, it, expect } from "vitest";
import { InstructionRecorder } from "../src/executors/InstructionRecorder";
import { evaluate } from "../src/evaluate";

describe("REPEAT instruction", () => {
    it("should repeat instruction in list", () => {
        const recorder = new InstructionRecorder();
        evaluate("REPEAT 4 [FORWARD 50]", recorder);

        expect(recorder.instructions).toEqual(new Array(4).fill({ type: "move", distance: 50 }));
    });
    it("should repeat instruction in list case insensitive", () => {
        const recorder = new InstructionRecorder();
        evaluate("repeat 4 [FORWARD 50]", recorder);

        expect(recorder.instructions).toEqual(new Array(4).fill({ type: "move", distance: 50 }));
    });
    it("should repeat multiple instructions in list", () => {
        const recorder = new InstructionRecorder();
        evaluate("REPEAT 4 [FORWARD 50 RIGHT 90]", recorder);

        expect(recorder.instructions).toEqual(
            new Array(4)
                .fill([
                    { type: "move", distance: 50 },
                    { type: "turn", angle: 90 },
                ])
                .flat(),
        );
    });
});
