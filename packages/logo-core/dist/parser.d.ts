export type ExpressionNode = {
    type: "number";
    value: number;
} | {
    type: "add" | "sub" | "mul" | "div";
    left: ExpressionNode;
    right: ExpressionNode;
};
export interface AstNode {
    type: "forward" | "repeat" | "turn";
    expr?: ExpressionNode;
    body?: AstNode[];
}
export declare function parse(input: string): AstNode[];
