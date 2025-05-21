// import { LogoExecutor } from "@logo/core";

export class CanvasExecutor {
    private ctx: CanvasRenderingContext2D;
    private x: number;
    private y: number;
    private angle = -90; // degrees
    private penDown = true;
    private color: string;

    constructor(ctx: CanvasRenderingContext2D, x?: number, y?: number) {
        this.ctx = ctx;

        const canvas = this.ctx.canvas;
        this.x = x ?? canvas.width / 2;
        this.y = y ?? canvas.height / 2;

        const raw = getComputedStyle(document.documentElement).getPropertyValue("--lg-canvas-stroke").trim();
        const computedColor = `rgb(${raw})`;
        console.log(computedColor);
        this.color = computedColor;
        this.ctx.strokeStyle = computedColor;
        this.ctx.fillStyle = computedColor;

        this.ctx.moveTo(this.x, this.y);
    }

    move(distance: number): void {
        const radians = (this.angle * Math.PI) / 180;
        const newX = this.x + Math.cos(radians) * distance;
        const newY = this.y + Math.sin(radians) * distance;

        if (this.penDown) {
            this.ctx.beginPath();
            this.ctx.moveTo(this.x, this.y);
            this.ctx.lineTo(newX, newY);

            this.ctx.strokeStyle = this.color;
            this.ctx.stroke();
        }

        this.x = newX;
        this.y = newY;
    }

    turn(angle: number): void {
        this.angle += angle;
    }

    pen(mode: "up" | "down"): void {
        this.penDown = mode === "down";
    }

    label(value: string): void {
        this.ctx.fillText(value, this.x, this.y);
    }

    setxy(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.ctx.moveTo(x, y);
    }

    clear(): void {
        const canvas = this.ctx.canvas;
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.angle = 0;
        this.ctx.moveTo(this.x, this.y);

        // Reapply stroke color
        const raw = getComputedStyle(document.documentElement).getPropertyValue("--lg-canvas-stroke").trim();
        const color = raw ? `rgb(${raw})` : "#ffffff";
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;

        // Optional: restore lineWidth if needed
        this.ctx.lineWidth = 2;
    }
}
