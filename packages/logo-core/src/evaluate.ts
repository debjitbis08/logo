import { AstNode, ExpressionNode, parse } from "./parser";
import { LogoExecutor } from "./instruction";

function evaluateExpr(expr: ExpressionNode): number {
    switch (expr.type) {
        case "number":
            return expr.value;
        case "add":
            return evaluateExpr(expr.left) + evaluateExpr(expr.right);
        case "sub":
            return evaluateExpr(expr.left) - evaluateExpr(expr.right);
        case "mul":
            return evaluateExpr(expr.left) * evaluateExpr(expr.right);
        case "div":
            return evaluateExpr(expr.left) / evaluateExpr(expr.right);
    }
}

export function evaluate(input: string, executor: LogoExecutor): void {
    const ast = parse(input);
    runAst(ast, executor);
}

function runAst(nodes: AstNode[], executor: LogoExecutor): void {
    for (const node of nodes) {
        switch (node.type) {
            case "forward":
                if (node.expr) executor.move(evaluateExpr(node.expr));
                break;
            case "repeat":
                if (node.expr && node.body) {
                    const count = evaluateExpr(node.expr);
                    for (let i = 0; i < count; i++) {
                        runAst(node.body, executor);
                    }
                }
                break;
            case "turn":
                if (node.expr) executor.turn(evaluateExpr(node.expr));
                break;
        }
    }
}
