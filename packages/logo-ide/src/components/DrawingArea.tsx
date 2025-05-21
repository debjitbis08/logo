import { onCleanup, onMount } from "solid-js";
import { CanvasExecutor } from "../lib/CanvasExecutor";
import { evaluate } from "@logo/core";
import { store } from "../store/store";
import Actions from "./Actions";

export default function DrawingArea() {
    let canvasRef: HTMLCanvasElement | undefined;
    let containerRef: HTMLDivElement | undefined;
    let executor: CanvasExecutor | undefined;

    const resizeCanvas = () => {
        if (!canvasRef || !containerRef) return;
        const size = Math.min(containerRef.clientWidth, containerRef.clientHeight);
        canvasRef.width = size - 2;
        canvasRef.height = size - 2;
    };

    onMount(() => {
        if (!canvasRef) return;
        const ctx = canvasRef.getContext("2d");
        if (!ctx) return;
        requestAnimationFrame(() => {
            resizeCanvas();
            executor = new CanvasExecutor(ctx); // color will now be correct
        });

        const resizeObserver = new ResizeObserver(resizeCanvas);
        if (containerRef) resizeObserver.observe(containerRef);

        onCleanup(() => {
            resizeObserver.disconnect();
            executor?.clear();
        });
    });

    const runProgram = () => {
        if (!executor) return;
        try {
            evaluate(store.activeFile.content, executor);
        } catch (err) {
            console.error("Logo program error:", err);
        }
    };

    const clearCanvas = () => {
        executor?.clear();
    };

    return (
        <div class="flex flex-col h-full w-full items-start gap-4 pr-2">
            <Actions onRun={runProgram} onClear={clearCanvas} />
            <div class="flex-grow w-full h-full min-h-0" ref={(el) => (containerRef = el)}>
                <canvas ref={canvasRef} class="border" />
            </div>
        </div>
    );
}
