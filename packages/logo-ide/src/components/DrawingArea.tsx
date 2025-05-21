import { onCleanup, onMount, createSignal } from "solid-js";
import { CanvasExecutor } from "../lib/CanvasExecutor";
import { evaluate } from "@logo/core";
import { store } from "../store/store"; // Assumes store.activeFile.content exists
import ActionButton from "./ActionButton";
import { HiSolidPlay, HiSolidStop, HiSolidWrench } from "solid-icons/hi";

export default function DrawingArea() {
    let canvasRef: HTMLCanvasElement | undefined;
    const [shouldRun, setShouldRun] = createSignal(false);

    const runProgram = () => {
        if (!canvasRef) return;
        const ctx = canvasRef.getContext("2d");
        if (!ctx) return;
        ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
        const executor = new CanvasExecutor(ctx);
        try {
            evaluate(store.activeFile.content, executor);
        } catch (err) {
            console.error("Logo program error:", err);
        }
    };

    onCleanup(() => {
        const ctx = canvasRef?.getContext("2d");
        if (ctx && canvasRef) {
            ctx.clearRect(0, 0, canvasRef.width, canvasRef.height);
        }
    });

    return (
        <div class="flex flex-col items-start gap-4">
            <div class="flex items-center gap-2">
                <ActionButton
                    title="Run"
                    icon={<HiSolidPlay class="text-terminal" />}
                    onClick={() => {
                        setShouldRun(true);
                        runProgram();
                    }}
                />
            </div>
            <canvas ref={canvasRef} width={500} height={500} class="border" />
        </div>
    );
}
