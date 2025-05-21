// import { LogoExecutor } from "@logo/core";

export class CanvasExecutor {
    private ctx: CanvasRenderingContext2D;
    private x = 250;
    private y = 250;
    private angle = 0; // degrees
    private penDown = true;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
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
    }
}
